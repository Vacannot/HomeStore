import React, { createContext, FC, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorage";
import { IProduct } from "../mockedProducts";

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

interface ICartContextValue {
  cart: ICartItem[];
  addProductToCart: (product: IProduct) => void;
  removeProductFromCart: (product: ICartItem) => void;
  emptyCart: () => void;
  getSumPriceProducts: (product: ICartItem) => number;
  getTotalSumExShip: (cartItem: ICartItem[]) => number;
  addQuantity: (product: ICartItem) => void;
  reduceQuantity: (product: ICartItem) => void;
  getTotalQuantity: (cartItem: ICartItem[]) => void;
}

export const CartContext = createContext<ICartContextValue>({
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  emptyCart: () => {},
  getSumPriceProducts: () => 0,
  getTotalSumExShip: () => 0,
  addQuantity: () => 0,
  reduceQuantity: () => 0,
  getTotalQuantity: () => 0,
});

export function useCart() {
  return useContext(CartContext);
}

const CartProvider: FC = (props) => {
  const [cart, setCart] = useLocalStorageState<ICartItem[]>([], "cart");
  const vat = 0.25;

  /**
   *
   * @param product
   * Makes a copy of cart and finds index number for cart item id that matches product id.
   * if found (if item is already in cart) add quantity. if not found (item is not already on cart) add product to cart.
   */
  const addProductToCart = (product: IProduct) => {
    let cartToSave = [...cart];
    const foundIndex = cartToSave.findIndex(
      (cartItem) => cartItem.product.id === product.id
    );

    if (foundIndex >= 0) {
      cartToSave[foundIndex].quantity++;
    } else {
      cartToSave.push({ product, quantity: 1 });
    }
    setCart(cartToSave);
    return;
  };

  /**
   *
   * @param product
   *   Makes a copy of cart and finds index number for cart item id that matches product id.
   *  When found reduce item quantity and then saves updated cart to cart
   */
  const removeProductFromCart = (product: ICartItem) => {
    let cartToSave = [...cart];
    const foundIndex = cartToSave.findIndex(
      (cartItem) => cartItem.product.id === product.product.id
    );
    if (foundIndex >= 0) {
      cartToSave.splice(foundIndex, 1);
    }
    setCart(cartToSave);
  };

  /**
   *
   * @param cartItem
   * @returns total sum = price for a product times its quantity
   */
  const getSumPriceProducts = (cartItem: ICartItem) => {
    let priceSum = 0;
    priceSum += cartItem.product.price * cartItem.quantity;
    return priceSum;
  };

  /**
   *
   * @param product
   * @returns total sum of all products (ex. shipping, ink vat)
   */
  const getTotalSumExShip = (product: ICartItem[]) => {
    let sum = 0;
    for (let i = 0; i < product.length; i++) {
      sum += product[i].product.price * product[i].quantity;
    }
    return sum;
  };

  /**
   *
   * @param product
   * Makes a copy of cart. Founds the index number of the cart item that has a
   * matching id with the product sent in from cart item card. If index is found adds 1 to products quantity
   */
  const addQuantity = (product: ICartItem) => {
    let quantityToSave = [...cart];
    const foundIndex = quantityToSave.findIndex(
      (cartItem) => cartItem.product.id === product.product.id
    );
    if (foundIndex >= 0) {
      quantityToSave[foundIndex].quantity++;
    }
    setCart(quantityToSave);
  };

  /**
   *
   * @param cartItem
   * reduced quantity of product type in cart
   */
  const reduceQuantity = (cartItem: ICartItem) => {
    const updatedQuantity = cart.map((item) => {
      if (item.product.id === cartItem.product.id && item.quantity >= 1) {
        item.quantity--;
        return { ...item, quantity: item.quantity };
      }
      return item;
    });
    setCart(updatedQuantity);
  };

  /**
   *
   * @param cartItem
   * gets total quantity of all products in cart
   */
  const getTotalQuantity = (cartItem: ICartItem[]) => {
    let updatedQuantity;
    for (let i = 0; i < cartItem.length; i++) {
      updatedQuantity = updatedQuantity + cartItem[i].quantity;
    }
  };

  const emptyCart = () => {
    setCart([]);
    localStorage.clear();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        emptyCart,
        getSumPriceProducts,
        getTotalSumExShip,
        addQuantity,
        reduceQuantity,
        getTotalQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;

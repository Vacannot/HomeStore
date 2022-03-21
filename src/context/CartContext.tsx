import React, {createContext, FC, useState } from 'react';
import { Products } from '../mockedProducts'

interface ICartItem extends Products {
    quantity: number;
}

interface ICartContextValue {
    cart: ICartItem[],
    addProductToCart: (product: Products) => void;
    removeProductFromCart: (product: Products) => void;
    emptyCart: () => void;
    sumPriceProducts: (product: ICartItem) => number;
    totalSum: (cartItem: ICartItem[]) => number;
    addQuantity: (product: ICartItem) => number;
    reduceQuantity:  (product: ICartItem) => number;
    totalQuantity: (cartItem: ICartItem[]) => number;
    createOrderId: () => number;
    calculateVatPrice: (cartItem: ICartItem[]) => number;


}

export const CartContext = createContext<ICartContextValue>({
    cart: [],
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    emptyCart: () => {},
    sumPriceProducts: () => 0,
    totalSum: () => 0,
    addQuantity: () => 0,
    reduceQuantity:  () => 0,
    totalQuantity: () => 0,
    createOrderId: () => 0,
    calculateVatPrice: () => 0,
});

const CartProvider: FC = (props) => {
    const [cart, setCart] = useState<ICartItem[]>([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const vat = 0.25;

    const addProductToCart = (product: Products) => {
        let cartToSave = [...cart];
        const cartItem = cart.find(cartItem => cartItem.id === product.id);
        if (cartItem) {
            cartItem.quantity++;
        } else {
           cartToSave = [...cartToSave, {...product, quantity: 1 }];
        }
        setCart(cartToSave);
        console.log(cartToSave);
    }

    const removeProductFromCart = (product: Products) => {
        let cartToSave = [...cart];
        const cartItem = cart.find(cartItem => cartItem.id === product.id);
        if (cartItem) {
            cartItem.quantity--;
            if (cartItem.quantity === 0) {
                cartToSave = cart.filter(cartItem => cartItem.id !== product.id);
            }
            setCart(cartToSave);
        }

    const emptyCart = () => setCart([]);

    /**
     * 
     * @param product 
     * @returns total sum for a product times its quantity
     */
    const sumPriceProducts = (product: ICartItem) => {
        let priceSum = 0;
        priceSum += product.price * product.quantity;
        return priceSum;
    }

    /**
     * 
     * @param cartItem 
     * @returns total sum of all products (ex. shipping, ink vat)
     */
    const totalSum = (cartItem: ICartItem[]) => {
       let sum = 0;
       for (let i = 0; i < cartItem.length; i++) {
            sum += cartItem[i].price * cartItem[i].quantity;
       }
        return sum
    }



    return (
        <CartContext.Provider value={{
            cart,
            addProductToCart,
            removeProductFromCart,
            emptyCart,
            sumPriceProducts,
            totalSum,
            // addQuantity,
            // reduceQuantity,
            // totalQuantity,
            // createOrderId,
            // calculateVatPrice,
        }}>
            {children}
        </CartContext.Provider>
    )
    
}
}
export default CartProvider;

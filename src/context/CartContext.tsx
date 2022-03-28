import React, { createContext, FC, useContext, useState } from 'react';
import { number } from 'yup';
import { useLocalStorageState } from '../hooks/useLocalStorage';
import { IProduct } from '../mockedProducts';
import { IShippingProvider } from '../shippigProvider';

export interface ICartItem {
	product: IProduct;
	quantity: number;
}

export type CartItemType = {
	id: number;
	category: string;
	title: string;
	image: string;
	description: string;
	price: number;
	quantity: number;
};

export interface ICartContextValue {
	cart: ICartItem[];
	shipping: IShippingProvider;
	addProductToCart: (product: IProduct) => void;
	removeProductFromCart: (product: IProduct) => void;
	emptyCart: () => void;
	getSumPriceProducts: (product: ICartItem) => number;
	getTotalSum: (cartItem: ICartItem[]) => number;
	addQuantity: (product: ICartItem) => void;
	reduceQuantity: (product: ICartItem) => void;
	getTotalQuantity: (cartItem: ICartItem[]) => void;
	getTotalCartItems: (items: CartItemType[]) => void;
	createOrderId: () => number;
	calculateVatPrice: (cartItem: ICartItem[]) => number;
}

export const CartContext = createContext<ICartContextValue>({
	cart: [],
	shipping: {
		company: '',
		price: 0,
		time: '',
	},
	addProductToCart: () => {},
	removeProductFromCart: () => {},
	emptyCart: () => {},
	getSumPriceProducts: () => 0,
	getTotalSum: () => 0,
	addQuantity: () => 0,
	reduceQuantity: () => 0,
	getTotalQuantity: () => 0,
	getTotalCartItems: () => null,
	createOrderId: () => 0,
	calculateVatPrice: () => 0,
});

export function useCart() {
	return useContext(CartContext);
}

const CartProvider: FC = (props) => {
	const [cart, setCart] = useLocalStorageState<ICartItem[]>([], 'cart');
	const vat = 0.25;

	/**
	 *
	 * @param product
	 * Makes a copy of cart and finds index number for cart item id that matches product id.
	 * if found (if item is already in cart) add quantity. if not found (item is not already on cart) add product to cart.
	 */
	const addProductToCart = (product: IProduct) => {
		let cartToSave = [...cart];
		const foundIndex = cartToSave.findIndex((cartItem) => cartItem.product.id === product.id);
		if (foundIndex >= 0) {
			cartToSave[foundIndex].quantity++;
		} else {
			cartToSave.push({ product, quantity: 1 });
		}
		setCart(cartToSave);
		console.log(cartToSave);
		setTimeout(() => {
			console.log('CART', cart);
		}, 1000);
	};

	/**
	 *
	 * @param product
	 *   Makes a copy of cart and finds index number for cart item id that matches product id.
	 *  When found reduce item quantity and then saves updated cart to cart
	 */
	const removeProductFromCart = (product: IProduct) => {
		let cartToSave = [...cart];
		const foundIndex = cartToSave.findIndex((cartItem) => cartItem.product.id === product.id);
		if (foundIndex >= 0) {
			cartToSave[foundIndex].quantity--;
			// if (cartToSave[foundIndex].quantity === 0) {
			//   cartToSave = cart.filter((cartItem) => cartItem.product.id !== product.id);
			// }
		}
		setCart(cartToSave);
	};

	/**
	 *
	 * @param product
	 * @returns total sum = price for a product times its quantity
	 */
	const getSumPriceProducts = (cartItem: ICartItem) => {
		let priceSum = 0;
		priceSum += cartItem.product.price * cartItem.quantity;
		return priceSum;
	};

	/**
	 *
	 * @param cartItem
	 * @returns total sum of all products (ex. shipping, ink vat)
	 */
	const getTotalSum = (cartItem: ICartItem[]) => {
		let sum = 0;
		for (let i = 0; i < cartItem.length; i++) {
			sum += cartItem[i].product.price * cartItem[i].quantity;
		}
		return sum;
	};

	/**
	 *
	 * @param product
	 * @returns quantity of one product type in cart
	 */
	const addQuantity = (cartItem: ICartItem) => {
		const updatedQuantity = cart.map((item) => {
			if (item.product.id === cartItem.product.id) {
				return { ...item, quantity: item.quantity++ };
			}
			return item;
		});
		setCart(updatedQuantity);
	};

	/**
	 *
	 * @param product
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
		// plussa ihop alla items quantity i carten
		let updatedQuantity;
		for (let i = 0; i < cartItem.length; i++) {
			updatedQuantity = updatedQuantity + cartItem[i].quantity;
		}
	};

	/**
	 *
	 * @param cartItem
	 * gets total quantity of all products in cart
	 */
	const getTotalCartItems = (items: CartItemType[]) =>
		items.reduce((ack: number, cartItem) => ack + cartItem.quantity, 0);

	/**
	 *
	 * @returns order id
	 *
	 */
	const createOrderId = () => {
		// https://www.npmjs.com/package/order-id
		// const orderid = require('order-id')('key');
		// const id = orderid.generate();
		return 123;
	};

	/**
	 *
	 * @param cartItem
	 * @returns vat/moms of the order
	 */
	const calculateVatPrice = (cartItem: ICartItem[]) => {
		let productSum = getTotalSum(cartItem);
		return productSum * vat;
	};

	const emptyCart = () => setCart([]);

	return (
		<CartContext.Provider
			value={{
				cart,
				shipping: {
					company: '',
					price: 0,
					time: '',
				},
				addProductToCart,
				removeProductFromCart,
				emptyCart,
				getSumPriceProducts,
				getTotalSum,
				addQuantity,
				reduceQuantity,
				getTotalQuantity,
				getTotalCartItems,
				createOrderId,
				calculateVatPrice,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;

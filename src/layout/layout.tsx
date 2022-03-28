import React, { CSSProperties } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StartPage from '../pages/startPage';
import Header from '../components/Header';
import CartPage from '../pages/cartPage';
import Footer from '../components/Footer';
import CheckoutPage from '../pages/checkoutPage';
import ProductPage from '../pages/productPage';
import { product } from '../mockedProducts';

export default function Layout() {
	return (
		<div style={rootStyle}>
			<Header />
			<Routes>
				<Route path='/' element={<StartPage />} />
				<Route path='/product/:id' element={<ProductPage product={product} />} />
				<Route path='/varukorg' element={<CartPage />} />
				<Route path='/kassa' element={<CheckoutPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

const rootStyle: CSSProperties = {
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
};

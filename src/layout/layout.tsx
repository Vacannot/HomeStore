import React, { CSSProperties } from 'react';
import { Route, Routes } from 'react-router-dom';
import StartPage from '../pages/startPage';
import Header from '../components/Header';
import CartPage from '../pages/cartPage';
import Footer from '../components/Footer';
import CheckoutPage from '../pages/checkoutPage';
import ProductPage from '../pages/productPage';
import { products } from '../mockedProducts';
import FavoritesPage from '../pages/favoritesPage';

export default function Layout() {
	return (
		<div style={rootStyle}>
			<Header />
			<Routes>
				<Route path='/' element={<StartPage />} />
				<Route path='/produkt/:id' element={<ProductPage product={products} />} />
				<Route path='/favoriter' element={<FavoritesPage />} />
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

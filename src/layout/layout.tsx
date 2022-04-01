import React, { CSSProperties } from 'react';
import { Route, Routes } from 'react-router-dom';
import StartPage from '../pages/startPage';
import Header from '../components/Header';
import CartPage from '../pages/cartPage';
import Footer from '../components/Footer';
import CheckoutPage from '../pages/checkoutPage';
import ProductPage from '../pages/productPage';
import { IProduct } from '../mockedProducts';
import FavoritesPage from '../pages/favoritesPage';
import OrderInfoPage from '../pages/OrderInfoPage';

interface Props {
	product: IProduct;
}

export default function Layout({ product }: Props) {
	return (
		<div style={rootStyle}>
			<Header />
			<Routes>
				<Route path='/' element={<StartPage />} />
				<Route path='/produkt/:id' element={<ProductPage product={product} />} />
				<Route path='/favoriter' element={<FavoritesPage />} />
				<Route path='/varukorg' element={<CartPage />} />
				<Route path='/kassa' element={<CheckoutPage />} />
				<Route path='/order' element={OrderInfoPage} />
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

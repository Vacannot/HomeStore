import React, { CSSProperties } from 'react';
import { Switch, Route } from 'react-router-dom';
import StartPage from '../pages/startPage';
import Header from '../components/header';
import CartPage from '../pages/cartPage';
import Footer from '../components/Footer';
import CheckoutPage from '../pages/checkoutPage';
import ProductPage from '../pages/productPage';
import OrderPage from '../pages/OrderInfoPage'
import OrderInfoPage from '../pages/OrderInfoPage'

export default function Layout() {
	return (
		<div style={rootStyle}>
			<Header />
			<Switch>
				<Route path='/' exact component={StartPage} />
				<Route path='/produkt/:id' component={ProductPage} />
				<Route path='/varukorg' component={CartPage} />
				<Route path='/kassa' component={CheckoutPage} />
				<Route path='/order' component={OrderPage} />
				<Route path="/confirmation-page" component={OrderInfoPage} />

			</Switch>
			<Footer />
		</div>
	);
}

const rootStyle: CSSProperties = {
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
};

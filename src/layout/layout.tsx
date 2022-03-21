import React, { CSSProperties } from 'react';
import { Switch, Route } from 'react-router-dom';
import StartPage from '../pages/startPage';
import Header from '../components/Header';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';
import Footer from '../components/Footer';

function Layout() {
	return (
		<div style={rootStyle}>
			<Header />
			<Switch>
				<Route path='/' exact component={StartPage} />
				<Route path='/cart-page' component={CartPage} />
				<Route path='/checkout-page' component={CheckoutPage} />
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

export default Layout;

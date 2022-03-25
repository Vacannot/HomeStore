import React, { CSSProperties } from 'react';
import { Switch, Route } from 'react-router-dom';
import StartPage from '../pages/startPage';
import Header from '../components/header';
import CartPage from '../pages/cartPage';
import Footer from '../components/Footer';
import CheckoutPage from '../pages/checkoutPage';
import ProductPage from '../pages/productPage';

function Layout() {
	return (
		<div style={rootStyle}>
			<Header />
			<Switch>
				<Route path='/' exact component={StartPage} />
				<Route path='/produkt/:id' component={ProductPage} />
				<Route path='/varukorg' component={CartPage} />
				<Route path='/kassa' component={CheckoutPage} />
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

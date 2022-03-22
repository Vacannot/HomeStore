import React, { CSSProperties } from 'react';
import { Switch, Route } from 'react-router-dom';
import StartPage from '../pages/startPage';
import Header from '../components/header';
import CartPage from '../pages/cartPage';
import FormPage from '../pages/formPage';
import Footer from './footer';
import ShippingPage from '../pages/shippingPage';
import OrderInfoPage from '../pages/OrderInfoPage';

function Layout() {
	return (
		<div style={rootStyle}>
			<Header />
			<Switch>
				<Route path='/' exact component={StartPage} />
				<Route path='/cartpage' component={CartPage} />
				<Route path='/formpage' component={FormPage} />
				<Route path='/shippingpage' component={ShippingPage} />
				<Route path='/orderinfopage' component={OrderInfoPage} />
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

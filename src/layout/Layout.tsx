import React, { CSSProperties } from 'react';
import { Switch, Route } from 'react-router-dom';
import StartPage from '../pages/StartPage';
import Header from '../components/Header';
import CartPage from '../pages/CartPage';
import FormPage from '../pages/FormPage';
import Footer from './Footer';
import ShippingPage from '../pages/ShippingPage';
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

import React, { CSSProperties } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import StartPage from './../pages/startPage';
import CartPage from '../pages/cartPage';

function Layout() {
	return (
		<div style={rootStyle}>
			<Header />
			<Switch>
				<Route path='/' exact component={StartPage} />
				<Route path='/cartpage' component={CartPage} />
			</Switch>
		</div>
	);
}

const rootStyle: CSSProperties = {
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
};

export default Layout;

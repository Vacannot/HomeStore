import React, { CSSProperties } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/header';
import Banner from '../components/Banner';
import QuantityCounter from '../components/quantityCounter';
import CartPage from '../pages/cartPage';

function Layout() {
	return (
		<div style={rootStyle}>
			<Header />
			<Switch>
				{/* <Route path="/" exact/> */}
				<Route path="/cartpage" component={CartPage} />
				<Banner/> {/* Ska läggas i startpage */}
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

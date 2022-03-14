import React, { CSSProperties } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Banner from '../components/Banner';
import QuantityCounter from '../components/QuantityCounter';
import CartPage from '../pages/CartPage';

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

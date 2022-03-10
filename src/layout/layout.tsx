import React, { CSSProperties } from 'react';
import { Switch } from 'react-router-dom';
import Header from '../components/header';
import Banner from '../components/Banner';
import QuantityCounter from '../components/quantityCounter';
import Card from "../components/Card";

function Layout() {
	return (
		<div style={rootStyle}>
			<Switch>
				<Header />
			</Switch>
			<QuantityCounter />
				<Banner></Banner>
				<Card />
		</div>
	);
}

const rootStyle: CSSProperties = {
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
};

export default Layout;

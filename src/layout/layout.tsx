import React, { CSSProperties } from 'react';
import Header from '../components/header';
import Banner from '../components/Banner';
import StartPage from './../pages/startPage';

function Layout() {
	return (
		<div style={rootStyle}>
			<Header />
			<Banner />
			<StartPage />
		</div>
	);
}

const rootStyle: CSSProperties = {
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
};

export default Layout;

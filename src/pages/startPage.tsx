import React from 'react';
import { CSSProperties } from 'react';
import ProductGrid from './../components/productGrid';

const StartPageView = () => {
	return (
		<div style={rootStyle}>
			<ProductGrid />
		</div>
	);
};

export default StartPageView;

const rootStyle: CSSProperties = {
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	margin: '2rem',
};

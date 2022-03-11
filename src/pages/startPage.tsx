import React from 'react';
import { CSSProperties } from 'react';
import ProductGrid from './../components/productGrid';

const StartPage = () => {
	return (
		<div style={rootStyle}>
			<ProductGrid />
		</div>
	);
};

export default StartPage;

const rootStyle: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	margin: '2rem',
};

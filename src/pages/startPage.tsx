import React from 'react';
import { CSSProperties } from 'react';
import Banner from '../components/Banner';
import CategoryCarousel from '../components/CategoryCarousel';
// import ProductGrid from '../components/ProductGrid';

const StartPage = () => {
	return (
		<div style={rootStyle}>
			<Banner />
			<CategoryCarousel />
			{/* <ProductGrid /> */}
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

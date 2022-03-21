import React from 'react';
import { CSSProperties } from 'react';
import Banner from '../components/Banner';
import ProductGrid from '../components/ProductGrid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const StartPage = () => {
	return (
		<div style={rootStyle}>
			<Banner />
			<Link to="/orderinfopage">
				<Button>order info page länk</Button>
			</Link>
				
			
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

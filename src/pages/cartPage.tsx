import { Button, Typography, useTheme, Theme } from '@mui/material';
import React, { CSSProperties } from 'react';
import CartItemCard from '../components/cartItemCard';
import { Link } from 'react-router-dom';

export default function CartPage() {
	return (
		<div style={rootStyle}>
			<Typography align='center' variant='h4' sx={{ m: 1 }}>
				Shopping Cart
			</Typography>
			<CartItemCard />
			<div style={paymentDivStyle}>
				<Link to='/formpage'>
					<Button sx={{ backgroundColor: 'green', m: 1 }} variant='contained'>
						GO TO PAYMENT
					</Button>
				</Link>

				<Typography variant='h6'>Total: Kr</Typography>
			</div>
		</div>
	);
}

const rootStyle: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	marginTop: '4rem',
};

const paymentDivStyle: CSSProperties = {
	maxWidth: '20rem',
};

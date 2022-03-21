import React, { CSSProperties } from 'react';
import { Button, Typography, useTheme, Theme } from '@mui/material';
import CartItemCard from '../components/CartItemCard';

function CartPage() {
	return (
		<div style={rootStyle}>
			<Typography align='center' variant='h4' sx={{ m: 1 }}>
				Shopping Cart
			</Typography>
			<CartItemCard />
			<CartItemCard />
			<div style={paymentDivStyle}>
				<Button sx={{ backgroundColor: 'green', m: 1 }} variant='contained'>
					GO TO PAYMENT
				</Button>
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

export default CartPage;

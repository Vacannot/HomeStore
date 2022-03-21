import { Button, Typography } from '@mui/material';
import React, { CSSProperties } from 'react';
import CartItemCard from '../components/CartItemCard';
import { Link } from 'react-router-dom';

function CartPage() {
	return (
		<div style={rootStyle}>
			<Typography align='center' variant='h4' sx={{ m: 1 }}>
				Varukorg
			</Typography>
			<CartItemCard />
			<CartItemCard />
			<div style={paymentDivStyle}>
				<Link to='/checkout-page'>
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

export default CartPage;

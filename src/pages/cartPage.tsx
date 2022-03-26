import { Button, Typography } from '@mui/material';
import React, { CSSProperties, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItemCard from '../components/CartItemCard';
import { CartContext } from '../context/CartContext';

function CartPage() {
	let { cart } = useContext(CartContext);

	return (
		<div style={rootStyle}>
			<Typography align='center' variant='h4' sx={{ m: 1 }}>
				Varukorg
			</Typography>
			{cart.map((cartItem) => {
				return <CartItemCard key={cartItem.product.id} />;
			})}
			<div style={paymentDivStyle}>
				<Link to='/kassa'>
					<Button sx={{ backgroundColor: 'green', m: 1 }} variant='contained'>
						Gå till kassan
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
	marginTop: '7rem',
};

const paymentDivStyle: CSSProperties = {
	maxWidth: '20rem',
};

export default CartPage;

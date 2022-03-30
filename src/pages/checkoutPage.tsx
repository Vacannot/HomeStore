import React, { CSSProperties } from "react";
import CheckoutAccordion from '../components/CheckoutAccordion';
import { Typography } from '@mui/material';

// import CartPage from './cartPage';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'

const CheckoutPage = () => {
	const {emptyCart} = useCart();
	const handleClick = () => {emptyCart();}
	
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignContent: 'center',
				alignItems: 'center',
				marginTop: '6rem',
			}}>
			<Typography align='center' variant='h4' sx={{ m: 1 }}>
				Kassa
			</Typography>
			{/* <CartPage /> */}
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignContent: 'center',
					alignItems: 'center',
					marginTop: '2rem',
					width: '70%',
				}}>
				<CheckoutAccordion />
				<Link to="/confirmation-page">
					<button onClick={handleClick}>Order Info Page</button>
				</Link>
			</div>
		</div>
	);
};



export default CheckoutPage;

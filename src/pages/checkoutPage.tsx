import React, { CSSProperties } from "react";
import CheckoutAccordion from '../components/CheckoutAccordion';
import { Typography } from '@mui/material';

// import CartPage from './cartPage';

const CheckoutPage = () => {
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

			</div>
		</div>
	);
};



export default CheckoutPage;

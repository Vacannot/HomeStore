import React, { CSSProperties } from 'react';
import CheckoutAccordion from '../components/CheckoutAccordion';
import { Typography } from '@mui/material';

export default function FavoritesPage() {
	return (
		<div style={rootStyle}>
			{/* style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignContent: 'center',
				alignItems: 'center',
				marginTop: '6rem',
			}}> */}
			<Typography align='center' variant='h4' sx={{ m: 1 }}>
				Favoriter
			</Typography>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignContent: 'center',
					alignItems: 'center',
					marginTop: '2rem',
					width: '70%',
				}}></div>
		</div>
	);
}

const rootStyle: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	marginTop: '7rem',
};

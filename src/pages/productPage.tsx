import React from 'react';
import { CSSProperties } from 'react';
import ProductCard from '../components/ProductCard';
import { Typography } from '@mui/material';
import { IProduct, product } from '../mockedProducts';

interface Props {
	product: IProduct;
}

export default function ProductPage(props: Props) {
	return (
		<div style={ProductContainer}>
			<Typography align='center' variant='h4' sx={{ m: 1 }}>
				Produkt detaljer
			</Typography>
			<ProductCard product={props.product.id} />
		</div>
	);
}

const ProductContainer: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	marginTop: '7rem',
};
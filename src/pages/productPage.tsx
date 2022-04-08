import React from 'react';
import {
//   Routes,
  Route,
//   Outlet,
  Link,
//   useSearchParams,
  useParams,
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { CSSProperties } from 'react';
import ProductDetailedCard from '../components/ProductCard';
import { Typography } from '@mui/material';
import { IProduct, products } from '../mockedProducts';

export default function ProductPage() {
	let matchingProduct;

	matchingProduct = products.find((item) => window.location.pathname === `/produkt/${item.id}`);
	return (
		<div style={ProductContainer}>
			<Typography align='center' variant='h4' sx={{ m: 1 }}>
				Produkt detaljer
			</Typography>
			<ProductDetailedCard product={matchingProduct} />
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

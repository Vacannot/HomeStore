import React from 'react';
import {
	//   Routes,
	Route,
	//   Outlet,
	Link,
	//   useSearchParams,
	useParams,
} from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { CSSProperties } from 'react';
import ProductDetailedCard from '../components/ProductCard';
import { Typography } from '@mui/material';
import { IProduct, products } from '../mockedProducts';

interface Props {
	product: IProduct;
}

// type Product = {
// 	product: IProduct;
// };

// function getProductById(id: string) {
// 	return products.find((product) => product.id === id);
// }

export default function ProductPage({ product }: Props) {
	let { id } = useParams<'id'>();

	// let PRODUCT = getProductById('id');

	//   let name = `${Product.title} ${Product.description} ${Product.price}`;

	return (
		<div style={ProductContainer}>
			<Typography align='center' variant='h4' sx={{ m: 1 }}>
				Produkt detaljer
			</Typography>
			{products.map((product, id) => {
				return <ProductDetailedCard key={product.id} product={product} />;
			})}
			{/* <ProductDetailedCard product={product.PRODUCT.id} /> */}
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

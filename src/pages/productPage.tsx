import React from 'react';
import { useParams } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { CSSProperties } from 'react';
import ProductDetailedCard from '../components/ProductDetailedCard';
import { Typography } from '@mui/material';
import { IProduct, products } from '../mockedProducts';

interface Props {
	product: IProduct;
}

// type Product = {
//     product: IProduct;
// };

// function getProductById(id: string) {
//     return products.find((product) => product.id === id);
// }

export default function ProductPage() {
	let { params } = useParams<{ id: string }>();

	const product = products.find((product) => product.id === params?.id);
	if (!product) return null;

	// let PRODUCT = getProductById('id');

	//   let name = ${Product.title} ${Product.description} ${Product.price};

	return (
		<div key={product.id} style={ProductContainer}>
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

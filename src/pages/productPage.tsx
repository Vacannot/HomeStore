import React from 'react';
import { CSSProperties } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { IProduct, product, getProductById } from '../mockedProducts';
import { useParams } from 'react-router-dom';
import AddToFavoritesSnackbar from '../components/AddToFavoritesSnackbar';
import AddToCartSnackbar from '../components/AddToCartSnackbar';

interface Props {
	product: IProduct;
}

export default function ProductPage({ product }) {
	// let { id } = useParams<'id'>();

	let pruduct = getProductById(product.id);

	return (
		<div style={ProductContainer}>
			<Typography align='center' variant='h4' sx={{ m: 1 }}>
				Produkt detaljer
			</Typography>
			<Card sx={CardStyle}>
				<CardMedia
					sx={ImageStyle}
					component='img'
					height='260'
					image={product.image}
					alt='image'
				/>
				<CardContent sx={CardContentStyle}>
					<Typography sx={TitleStyle} gutterBottom variant='h5' component='div'>
						'{product.title}'
					</Typography>
					<Typography
						sx={DescriptionStyle}
						variant='body2'
						paddingBottom={1}
						color='text.secondary'
						component='div'>
						'{product.description}'
					</Typography>
				</CardContent>
				<div style={CardActionStyle}>
					<Typography sx={PriceStyle} gutterBottom variant='h6' component='div'>
						'{product.price} kr'
					</Typography>
					<CardActions style={CardAction}>
						<AddToFavoritesSnackbar product={product} />
						<AddToCartSnackbar product={product} />
					</CardActions>
				</div>
			</Card>
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

const CardStyle: CSSProperties = {
	minWidth: 265,
	maxWidth: 300,
	height: 450,
};

const CardContentStyle: CSSProperties = {
	marginBottom: '.5px',
	paddingTop: '8px',
	paddingRight: '8px',
	paddingBottom: '0',
	paddingLeft: '16px',
};

const LinkStyle: CSSProperties = {
	textDecoration: 'none',
	textDecorationColor: 'black',
	color: 'black',
};

const ImageStyle: CSSProperties = {
	border: '1px solid grey',
};

const TitleStyle: CSSProperties = {
	paddingBottom: '0',
	marginBottom: '2px',
};

const DescriptionStyle: CSSProperties = {
	height: '85px',
};

const CardActionStyle: CSSProperties = {
	display: 'flex',
	justifyContent: 'space-between',
};

const CardAction: CSSProperties = {
	paddingTop: '0',
};

const PriceStyle: CSSProperties = {
	alignSelf: 'center',
	paddingLeft: '16px',
	paddingTop: '16px',
};

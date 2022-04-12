import React, { CSSProperties } from 'react';
import Card from '@mui/material/Card';
import { CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddToCartSnackbar from './AddToCartSnackbar';
import AddToFavoritesSnackbar from './AddToFavoritesSnackbar';
import { Link } from 'react-router-dom';
import { IProduct } from '../mockedProducts';

interface Props {
	product: IProduct;
	addProductToCart: (product: IProduct) => void;
}

// type Product = {
// 	product: IProduct;
// 	addProductToCart: (product: IProduct) => void;
// };

export default function ProductCard({ product }: Props) {
	return (
		<div key={product.id}>
			<Card sx={CardStyle}>
				<Link to={`/product/${product.id}`} style={LinkStyle}>
					<CardMedia sx={ImageStyle} component='img' height='260' image={product.image} />
				</Link>
				<CardContent sx={CardContentStyle}>
					<Link to={`/product/${product.id}`} style={LinkStyle}>
						{/* <Link to={'/product/' + product.id} style={LinkStyle}> */}
						<Typography sx={TitleStyle} gutterBottom variant='h5' component='div'>
							{product.title}
						</Typography>
						<Typography
							sx={DescriptionStyle}
							variant='body2'
							paddingBottom={1}
							color='text.secondary'
							component='div'>
							{product.description_short}
						</Typography>
					</Link>
				</CardContent>
				<div style={CardActionStyle}>
					<Typography sx={PriceStyle} gutterBottom variant='h6' component='div'>
						{product.price} kr
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

const CardStyle: CSSProperties = {
	minWidth: 265,
	maxWidth: 300,
	height: 380,
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
	fontFamily: 'Poppins',
};

const DescriptionStyle: CSSProperties = {
	height: '1.5rem',
	fontFamily: 'Poppins-Regular',
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

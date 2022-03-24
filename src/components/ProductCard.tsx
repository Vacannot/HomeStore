import React, { CSSProperties } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddToCartSnackbar from './AddToCartSnackbar';
import { IProduct } from './../mockedProducts';
import AddToFavoritesSnackbar from './AddToFavoritesSnackbar';

interface IProps {
	product: IProduct;
}

export default function ProductCard(props: IProps) {
	return (
		<Card sx={CardStyle}>
			<CardMedia
				sx={ImageStyle}
				component='img'
				height='260'
				image={props.product.image}
				alt='image'
			/>
			<CardContent sx={CardContentStyle}>
				<Typography sx={TitleStyle} gutterBottom variant='h5' component='div'>
					{props.product.title}
				</Typography>
				<Typography
					sx={DescriptionStyle}
					variant='body2'
					paddingBottom={1}
					color='text.secondary'
					component='div'>
					{props.product.description}
				</Typography>
			</CardContent>
			<div style={CardActionStyle}>
				<Typography sx={PriceStyle} gutterBottom variant='h6' component='div'>
					{props.product.price} kr
				</Typography>
				<CardActions style={CardAction}>
					<AddToFavoritesSnackbar product={props.product} />
					<AddToCartSnackbar product={props.product} />
				</CardActions>
			</div>
		</Card>
	);
}

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

import React, { CSSProperties } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import stolar from '../assets/stolar.jpg';
import IconButton from '@mui/material/IconButton';
import { Favorite } from '@mui/icons-material';
import AddToCartSnackbar from './AddToCartSnackbar';
import { IProduct } from './../mockedProducts';

type Props = {
	product: IProduct;
};

export default function ProductCard({ product }) {
	return (
		<Card sx={{ maxWidth: 400 }}>
			<CardMedia component='img' height='260' image={product.image} alt='image' />
			{/* <img src={product.image} alt='product' /> */}
			<CardContent>
				<Typography gutterBottom variant='h4' component='div'>
					{product.title}
				</Typography>
				<Typography variant='body2' color='text.secondary' component='div'>
					{product.description}
				</Typography>
				<Typography gutterBottom variant='h6' component='div'>
					{product.price} kr
				</Typography>
			</CardContent>
			<CardActions style={{ justifyContent: 'right' }}>
				<IconButton sx={ButtonStyle} aria-label='favorite' size='large'>
					<Favorite />
				</IconButton>
				<AddToCartSnackbar />
			</CardActions>
		</Card>
	);
}

const ButtonStyle: CSSProperties = {
	backgroundColor: '#BFD8D5',
};

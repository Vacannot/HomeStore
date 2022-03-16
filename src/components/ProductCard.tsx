import React, { CSSProperties } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import stolar from '../assets/stolar.jpg';
import IconButton from '@mui/material/IconButton';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Favorite } from '@mui/icons-material';
import AddToCartSnackbar from './AddToCartSnackbar';

export default function ProductCard() {
	return (
		<Card sx={{ maxWidth: 400 }}>
			<CardMedia component='img' height='260' image={stolar} alt='image' />
			<CardContent>
				<Typography gutterBottom variant='h4' component='div'>
					Två stolar
				</Typography>
				<Typography variant='body2' color='text.secondary' component='div'>
					Två snygga stolar gjord i björk.
				</Typography>
				<Typography gutterBottom variant='h6' component='div'>
					299kr
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
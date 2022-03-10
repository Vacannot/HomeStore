import React, { CSSProperties, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import image from '../assets/furniture.jpeg';
import QuantityCounter from './QuantityCounter';
import DeleteIcon from '@mui/icons-material/Delete';

function CartItemCard() {
	const [price, setPrice] = useState(123);
	return (
		<Card sx={{ width: 345, marginLeft: '10rem' }}>
			<CardMedia component='img' height='140' image={image} alt='placeholder' />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					Produkt Title
				</Typography>
				<Typography variant='body2' color='GrayText.secondary'>
					<p>Pris: {price} kr</p>
				</Typography>
			</CardContent>

			<CardActions sx={CardActionsStyle}>
				<QuantityCounter />
				<IconButton color='error' aria-label='remove item from cart'>
					<DeleteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}

const CardActionsStyle: CSSProperties = {
	border: '2px solid red',
	display: 'flex',
	justifyContent: 'space-around',
};
export default CartItemCard;

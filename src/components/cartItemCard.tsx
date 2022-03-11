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
		<Card sx={rootCardStyle}>
			<div style={{ display: 'flex' }}>
				<CardMedia sx={CardMediaStyle} component='img' image={image} alt='placeholder' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Produkt Title
					</Typography>
					<Typography variant='body2' color='GrayText.secondary'>
						<p>Pris: {price} kr</p>
					</Typography>
				</CardContent>
			</div>

			<CardActions sx={CardActionsStyle}>
				<QuantityCounter />
				<IconButton sx={{ backgroundColor: '#DB7575' }} aria-label='remove item from cart'>
					<DeleteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}

const rootCardStyle: CSSProperties = {
	width: '70%',
	margin: '1rem auto',
	display: 'flex',
	flexDirection: 'column',
};
const CardActionsStyle: CSSProperties = {
	border: '2px solid red',
	display: 'flex',
	justifyContent: 'space-around',
};
const CardMediaStyle: CSSProperties = {
	height: '100%',
	width: '50%',
};

export default CartItemCard;

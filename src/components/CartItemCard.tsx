import React, { CSSProperties, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import QuantityCounter from './QuantityCounter';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ICartItem } from '../context/CartContext';

interface Props {
	product: ICartItem;
}

function CartItemCard({ product }: Props) {
	const [price, setPrice] = useState(123);
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Card sx={rootCardStyle}>
			<div style={{ display: 'flex' }}>
				<CardMedia
					sx={CardMediaStyle}
					component='img'
					image={product.product.image}
					alt='placeholder'
				/>
				<CardContent>
					<Typography gutterBottom variant='body1' component='div'>
						{product.product.title}
					</Typography>
					<Typography variant='body2' color='GrayText.secondary'>
						{product.product.price} kr
					</Typography>
				</CardContent>
			</div>
			<CardActions sx={CardActionsStyle}>
				<QuantityCounter product={product} />
				<IconButton sx={{ backgroundColor: '#DB7575' }} aria-label='remove item from cart'>
					<DeleteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}

const rootCardStyle: CSSProperties = {
	width: '70%',
	maxWidth: '30rem;',
	margin: '1rem auto',
	display: 'flex',
	flexDirection: 'column',
};
const CardActionsStyle: CSSProperties = {
	display: 'flex',
	justifyContent: 'space-around',
};

const CardMediaStyle: CSSProperties = {
	height: '100%',
	width: '50%',
};

export default CartItemCard;

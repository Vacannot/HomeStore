import React, { CSSProperties } from 'react';
import Card from '@mui/material/Card';
import { CardActions, CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddToCartSnackbar from './AddToCartSnackbar';
import AddToFavoritesSnackbar from './AddToFavoritesSnackbar';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';

export default function ProductCard({ product }) {
	let [searchParams] = useSearchParams();
	let Product = searchParams.get('Product');
	const navigate = useNavigate();
	const handleClick = () => {
		// navigate('/produkt' + product.id);
		navigate(`/product/${product.id}`);
	};

	return (
		<Card sx={CardStyle}>
			<CardActionArea onClick={handleClick}>
				<CardMedia
					sx={ImageStyle}
					component='img'
					height='260'
					image={product.image}
					alt='image'
				/>
				<CardContent sx={CardContentStyle}>
					<Typography sx={TitleStyle} gutterBottom variant='h5' component='div'>
						{product.title}
					</Typography>
					<Typography
						sx={DescriptionStyle}
						variant='body2'
						paddingBottom={1}
						color='text.secondary'
						component='div'>
						{product.description}
					</Typography>
					{/* </Link> */}
				</CardContent>
			</CardActionArea>
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

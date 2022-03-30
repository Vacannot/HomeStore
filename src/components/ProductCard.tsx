import React, { CSSProperties } from 'react';
import Card from '@mui/material/Card';
import { CardActionArea, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddToCartSnackbar from './AddToCartSnackbar';
import AddToFavoritesSnackbar from './AddToFavoritesSnackbar';
import { Link } from 'react-router-dom';
import { IProduct } from '../mockedProducts';
// import { useNavigation } from 'react-router-dom';

type Props = {
   product: IProduct;
};

export default function ProductCard({ product }) {
	// const navigation = useNavigation();
	// const goToProduct = () => {
	// 	navigation('/product/' + product.id);
	// };

	return (
		<Card sx={CardStyle}>
			<Link to={'/produkt' + product.id} style={LinkStyle}>
				<CardMedia
					sx={ImageStyle}
					component='img'
					height='260'
					image={product.image}
					alt='image'
				/>
			</Link>
			<CardContent sx={CardContentStyle}>
				<Link to={'/produkt' + product.id} style={LinkStyle}>
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

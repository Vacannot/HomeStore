import React, { CSSProperties } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddToCartSnackbar from './AddToCartSnackbar';
import AddToFavoritesSnackbar from './AddToFavoritesSnackbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IProduct, products } from '../mockedProducts';
import { Link } from 'react-router-dom';
import { Box, CardActionArea } from '@mui/material';
import { useParams } from 'react-router-dom';

interface Props {
	product: IProduct;
}

export default function ProductDetailedCard({ product }: Props) {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));
	const { id } = useParams();
	const thisProduct = products.find((p) => p.id === id);

	return (
		<Box sx={BoxStyle}>
			<Typography align='center' variant='h4' sx={{ m: 1 }}>
				Favoriter
			</Typography>
			<Card sx={CardStyle}>
				<CardActionArea>
					<CardMedia sx={ImageStyle} component='img' height='260' image={product.image} />
				</CardActionArea>
				<Typography sx={TitleStyle} gutterBottom variant='h5' component='div'>
					{product.title}
				</Typography>
				<Box style={CardActionStyle}>
					<Typography sx={PriceStyle} gutterBottom variant='h6' component='div'>
						{product.price} kr
					</Typography>
					<CardActions style={CardAction}>
						<AddToFavoritesSnackbar product={product} />
						<AddToCartSnackbar product={product} />
					</CardActions>
				</Box>
			</Card>
		</Box>
	);
}

const rootCardStyle: CSSProperties = {
	width: '80%',
	maxWidth: '30rem;',
	margin: '1rem auto',
	display: 'flex',
	flexDirection: 'column',
	marginTop: '7rem',
};

const BoxStyle: CSSProperties = {
	display: 'flex',
	flexWrap: 'wrap',
	gap: '3rem 10rem',
	justifyContent: 'center',
	paddingTop: '2rem',
	paddingBottom: '6rem',
};

const CardStyle: CSSProperties = {
	minWidth: 265,
	maxWidth: 300,
	height: 380,
};

const ImageStyle: CSSProperties = {
	border: '1px solid grey',
};

const TitleStyle: CSSProperties = {
	paddingBottom: '0',
	marginBottom: '2px',
	fontFamily: 'Poppins',
};

const LinkStyle: CSSProperties = {
	textDecoration: 'none',
	textDecorationColor: 'black',
	color: 'black',
};

const CardActionsStyle: CSSProperties = {
	display: 'flex',
	justifyContent: 'space-around',
};

const CardMediaStyle: CSSProperties = {
	height: '100%',
	width: '50%',
};

const DescriptionStyle: CSSProperties = {
	// height: '85px',
	height: '100%',
	width: '50%',
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

//   const [price, setPrice] = useState(123);
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.up("sm"));

//   return (
//     <Card sx={rootCardStyle}>
//       <div style={{ display: "flex" }}>
//         <CardMedia
//           sx={CardMediaStyle}
//           component="img"
//           image={product.product.image}
//           alt="placeholder"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="body1" component="div">
//             {product.product.title}
//           </Typography>
//           <Typography variant="body2" color="GrayText.secondary">
//             {product.product.price} kr
//           </Typography>
//         </CardContent>
//       </div>
//       <CardActions sx={CardActionsStyle}>
//         <QuantityCounter product={product} />
//       </CardActions>
//     </Card>
//   );
// }

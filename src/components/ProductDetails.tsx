import React, { CSSProperties } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import { IProduct } from '../mockedProducts';
import { Box, CardActionArea } from '@mui/material';
import AddToFavoritesSnackbar from '../components/AddToFavoritesSnackbar';
import AddToCartSnackbar from '../components/AddToCartSnackbar';
// import { getProductsObject } from '../mockedProducts';

interface Props {
	product: IProduct;
}

// interface Id {
// 	id: string;
// }

// function getProductById(id: string) {
// 	return products.find((product) => product.id === id);
// }

export default function ProductPage({ product }: Props) {
	//   const product = products.find((product) => product.id === params?.id);
	// const thisProduct = products.map((p) => p.id === product.id);

	// const thisProduct = products.find((item) => {
	// 	if (item.id === product.id) {
	// 		return product;
	// 	}

	// const match = useRouteMatch<Params>();
	// let product: Product | undefined = products.find((p: Product) => p.id === match.params.id);

	return (
		<div style={container}>
			<Typography align='center' variant='h4' sx={{ m: 1 }}>
				Produkt
			</Typography>
			<Box sx={BoxStyle}>
				{/* {products.map((product) => ( */}
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
				{/* ))} */}
			</Box>
		</div>
	);
}

const container: CSSProperties = {
	display: 'flex',
	flexGrow: 1,
	flexBasis: 0,
	maxWidth: '80rem',
	marginBlockStart: '1rem',
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

const ProductContainer: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	marginTop: '7rem',
};

// return (
// 	<div style={ProductContainer}>
// 		<Typography align='center' variant='h4' sx={{ m: 1 }}>
// 			Produkt detaljer
// 		</Typography>
// 		{products.map((product, id) => {
// 			return <ProductDetailedCard key={id} product={product} />;
// 		})}
// 		{/* <ProductDetailedCard product={product.PRODUCT.id} /> */}
// 	</div>
// );

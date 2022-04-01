import React, { CSSProperties } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import QuantityCounter from './QuantityCounter';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IProduct } from '../mockedProducts';
// import { ICartItem } from '../context/CartContext';

interface Props {
	product: IProduct;
	quantity: number;
}
// interface Props {
// 	product: ICartItem;
// }

export default function ProductDetailedCard({ product }: Props) {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Card sx={rootCardStyle}>
			<div style={{ display: 'flex' }}>
				<CardMedia
					sx={CardMediaStyle}
					component='img'
					image={product.image}
					alt='placeholder'
				/>
				<CardContent>
					<Typography gutterBottom variant='body1' component='div'>
						{product.title}
					</Typography>
					<Typography
						sx={DescriptionStyle}
						variant='body2'
						paddingBottom={1}
						color='text.secondary'
						component='div'>
						{product.description_long}
					</Typography>
					{/* <QuantityCounter product={product.quantity} /> */}
					<Typography variant='body2' color='GrayText.secondary'>
						{product.price} kr
					</Typography>
				</CardContent>
			</div>
			<CardActions sx={CardActionsStyle}>
				{/* <QuantityCounter quantity={product} /> */}
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

const DescriptionStyle: CSSProperties = {
	// height: '85px',
	height: '100%',
	width: '50%',
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

import * as React from 'react';
import { CSSProperties } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';
import { products } from '../mockedProducts';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'start',
	color: theme.palette.text.secondary,
}));

export default function ProductGrid() {
	return (
		<div style={container}>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 6, md: 8, lg: 12 }}>
					{products.map((product, id) => (
						<Grid key={id} style={gridItem} item xs={12} sm={6} md={4} lg={3}>
							<ProductCard product={product} />
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
}

// {
// 	products.map((product) => (
// 		<Grid item justify='center' className={classes.gridItem} xs={12} sm={6} md={4} xl={3}>
// 			<ProductCard product={product} handleReadMore={() => {}} />
// 		</Grid>
// 	));
// }

const container: CSSProperties = {
	display: 'flex',
	flexGrow: 1,
	flexBasis: 0,
	maxWidth: '80rem',
	marginBlockStart: '3rem',
};

const gridItem: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	padding: '1rem',
};

import React, { CSSProperties } from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
// import { Products, products } from '../mockedProducts';
import CartProvider, { useCart } from '../context/CartContext';

export interface State extends SnackbarOrigin {
	open: boolean;
}

export default function AddToCartSnackbar() {
	const [state, setState] = React.useState<State>({
		open: false,
		vertical: 'top',
		horizontal: 'center',
	});
	const { vertical, horizontal, open } = state;
	const {
		cart,
		addProductToCart,
		removeProductFromCart,
		emptyCart,
		getSumPriceProducts,
		getTotalSum,
		addQuantity,
		reduceQuantity,
		// totalQuantity,
		createOrderId,
		calculateVatPrice,
	} = useCart();

	const handleClick = (newState: SnackbarOrigin) => () => {
		setState({ open: true, ...newState });
	};

	const handleClose = () => {
		setState({ ...state, open: false });
	};

	const buttons = (
		<React.Fragment>
			<Button
				onClick={handleClick({
					vertical: 'top',
					horizontal: 'right',
				})}>
				<IconButton sx={ButtonStyle} aria-label='add to shopping cart' size='large'>
					<ShoppingCart />
				</IconButton>
			</Button>
		</React.Fragment>
	);

	return (
		<div>
			{buttons}
			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				autoHideDuration={2000}
				onClose={handleClose}
				message='Produkten har lagts till i varukorgen!'
				key={vertical + horizontal}
			/>
		</div>
	);
}

const ButtonStyle: CSSProperties = {
	backgroundColor: '#BFD8D5',
};

{
	/* <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
	Produkten har lagts till i varukorgen!
</Alert>; */
}

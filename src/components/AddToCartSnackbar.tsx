import React, { CSSProperties } from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';

export interface IPopUpState extends SnackbarOrigin {
	open: boolean;
}

export default function AddToCartSnackbar() {
	const [popUpState, setPopUpState] = React.useState<IPopUpState>({
		open: false,
		vertical: 'top',
		horizontal: 'center',
	});
	const { vertical, horizontal, open } = popUpState;
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
		setPopUpState({ open: true, ...newState });
	};

	const handleClose = () => {
		setPopUpState({ ...popUpState, open: false });
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

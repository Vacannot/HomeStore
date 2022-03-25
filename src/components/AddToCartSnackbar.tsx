import React, { CSSProperties } from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { product, IProduct } from '../mockedProducts';
import CartProvider, { useCart } from '../context/CartContext';

export interface State extends SnackbarOrigin {
	open: boolean;
}

interface Props {
 	product: IProduct; 
}

export default function AddToCartSnackbar(props: Props) {
	const [popUpState, setPopUpState] = React.useState<State>({
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
		getTotalQuantity,
		createOrderId,
		calculateVatPrice,
	} = useCart();

	const handleOnClickAdd = () => {
		setPopUpState({ open: true, vertical: 'top', horizontal: 'right' });
		addProductToCart(props.product);
		console.log('Product added to cart');
	};

	const handleOnClickClose = () => {
		setPopUpState({ ...popUpState, open: false });
	};

	const buttons = (
		<React.Fragment>
			<div onClick={handleOnClickAdd}>
				<IconButton sx={ButtonStyle} aria-label='add to shopping cart' size='large'>
					<ShoppingCart />
				</IconButton>
			</div>
		</React.Fragment>
	);

	return (
		<div>
			{buttons}
			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				autoHideDuration={2000}
				onClose={handleOnClickClose}
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
	/* <Alert onClose={handleOnClickClose} severity='success' sx={{ width: '100%' }}>
	Produkten har lagts till i varukorgen!
</Alert>; */
}

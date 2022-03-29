import React, { CSSProperties } from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IProduct } from '../mockedProducts';
import { useCart } from '../context/CartContext';

export interface IPopUpState extends SnackbarOrigin {
	open: boolean;
}

interface Props {
	product: IProduct;
}

export default function AddToCartSnackbar(props: Props) {
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
				<IconButton sx={ButtonStyle} aria-label='add to shopping cart' size='large' onClick={() => addProductToCart(product)}>
					<ShoppingCartOutlinedIcon />
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
				autoHideDuration={1000}
				onClose={handleOnClickClose}
				message='Produkten har lagts till i varukorgen!'
				key={vertical + horizontal}
			/>
		</div>
	);
}

const ButtonStyle: CSSProperties = {
	backgroundColor: '#BFD8D5',
	textDecoration: 'none',
	textDecorationColor: 'black',
	color: 'black',
};

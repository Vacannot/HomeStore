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

export default function AddToCartSnackbar({ product }: Props) {
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
    addQuantity,
    reduceQuantity,
    getTotalQuantity,
  } = useCart();

  const handleOnClickAdd = () => {
    addProductToCart(product);
    setPopUpState({ open: true, vertical: 'top', horizontal: 'right' });

    return;
  };

  const handleOnClose = () => {
    setPopUpState({ ...popUpState, open: false });
  };

  const buttons = (
    <React.Fragment>
      <div>
        <IconButton
          sx={ButtonStyle}
          aria-label="add to shopping cart"
          size="large"
          onClick={handleOnClickAdd}
        >
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
        onClose={handleOnClose}
        message="Produkten har lagts till i varukorgen!"
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

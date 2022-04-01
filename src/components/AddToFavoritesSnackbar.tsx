import React, { CSSProperties } from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { IProduct } from "../mockedProducts";

export interface State extends SnackbarOrigin {
  open: boolean;
}

interface Props {
  product: IProduct;
}

export default function AddToFavoritesSnackbar(props: Props) {
  const [popUpState, setPopUpState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = popUpState;
  // const {
  // 	cart,
  // 	addProductToCart,
  // 	removeProductFromCart,
  // 	emptyCart,
  // 	getSumPriceProducts,
  // 	getTotalSum,
  // 	addQuantity,
  // 	reduceQuantity,
  // 	getTotalQuantity,
  // 	// createOrderId,
  // 	calculateVatPrice,
  // } = useCart();

  const handleOnClickAdd = () => {
    setPopUpState({ open: true, vertical: "top", horizontal: "right" });
    // addProductToFavorites(props.product);
    console.log("Product added to list");
  };

  const handleOnClickClose = () => {
    setPopUpState({ ...popUpState, open: false });
  };

  const buttons = (
    <React.Fragment>
      <div onClick={handleOnClickAdd}>
        <IconButton
          sx={ButtonStyle}
          aria-label="add to shopping cart"
          size="large"
        >
          <FavoriteBorderOutlinedIcon />
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
        message="Produkten har lagts till i din lista!"
        key={vertical + horizontal}
      />
    </div>
  );
}

const ButtonStyle: CSSProperties = {
  backgroundColor: "#BFD8D5",
  textDecoration: "none",
  textDecorationColor: "black",
  color: "black",
};

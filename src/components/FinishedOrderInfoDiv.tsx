import { useMediaQuery, useTheme } from "@mui/material";
import React, { CSSProperties } from "react";
import { ICartItem } from "../context/CartContext";
import { useCart } from "../context/CartContext";

interface Props {
  product: ICartItem;
}

export const FinishedOrderInfoDiv = ({ product }: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:768px)");
  const { getSumPriceProducts } = useCart();
  const priceTotalPerProduct = getSumPriceProducts(product);

  return (
    <div style={rootStyle}>
      {matches === true ? (
        <div style={imgStyle}>
          <img style={imgStyle} src={product.product.image} alt="" />
        </div>
      ) : (
        <></>
      )}
      <p>{product.product.title}</p>
      <p>{product.quantity} st</p>
      <p>{product.product.price} kr st</p>
      <p>{priceTotalPerProduct} kr totalt</p>
    </div>
  );
};

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  backgroundColor: "beige",
  padding: "1rem",
  maxHeight: "20rem",
  overflow: "scroll",
};

const imgStyle: CSSProperties = {
  width: "5rem",
  height: "5rem",
};

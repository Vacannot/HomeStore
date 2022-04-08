import { Button, Typography } from "@mui/material";
import React, { CSSProperties, useContext } from "react";
import { Link } from "react-router-dom";
import CartItemCard from "../components/CartItemCard";
import { CartContext } from "../context/CartContext";

function CartPage() {
  let { cart, getTotalSumExShip } = useContext(CartContext);
  const priceOfProducts = getTotalSumExShip(cart);

  return (
    <div style={rootStyle}>
      <Typography align="center" variant="h4" sx={{ m: 1 }}>
        Varukorg
      </Typography>
      {cart.map((cartItem) => {
        return <CartItemCard key={cartItem.product.id} product={cartItem} />;
      })}
      <div style={paymentDivStyle}>
        <Typography variant="h6">Total: {priceOfProducts} Kr</Typography>

        <Button
          disabled={priceOfProducts === 0 ? true : false}
          sx={buttonStyle}
          variant="contained"
        >
          <Link style={linkStyle} to="/kassa">
            Gå till kassan
          </Link>
        </Button>
      </div>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "7rem",
};

const buttonStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "1rem",
  marginTop: "2rem",
  backgroundColor: "#BFD8D5",
  fontWeight: "700",
};

const linkStyle: CSSProperties = {
  textDecoration: "none",
  color: "black",
};

const paymentDivStyle: CSSProperties = {
  maxWidth: "20rem",
};

export default CartPage;

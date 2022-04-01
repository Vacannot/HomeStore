import { Box, Container, Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import { useOrderContext } from "../context/OrderContext";
import { useCart } from "../context/CartContext";

export const OrderOverview = () => {
  const { order } = useOrderContext();
  const { getTotalSumExShip } = useCart();

  const priceOfProducts = getTotalSumExShip(order.boughtItems);
  const priceShipping = order.shippingPrice;
  const priceTotal = priceOfProducts + priceShipping;

  return (
    <div>
      <Container sx={{ display: "flex" }}>
        <Container>
          <Typography variant="h6">Mina uppgifter</Typography>
          <Typography>
            {order.customer.firstName} {order.customer.lastName}
          </Typography>
          <Typography>
            {order.customer.address}, {order.customer.zipcode}
          </Typography>
          <Typography>{order.customer.city}</Typography>
          <Typography>{order.customer.email}</Typography>
        </Container>
        <Container>
          <Typography variant="h6">Leveransmetod</Typography>
          <Typography>{order.shippingMethod}</Typography>
          <Typography>{order.shippingPrice} kr</Typography>
        </Container>
        <Container>
          <Typography variant="h6">Betalmetod</Typography>
          <Typography>
            {order.paymentMethod === "swish"
              ? order.paymentMethod + " med nr: " + order.customer.number
              : order.paymentMethod}
          </Typography>
        </Container>
        <Container>
          <Typography variant="h5">
            Totalpris: {priceTotal} kr{" "}
            <span style={{ fontSize: "15px", color: "grey" }}>(ink moms)</span>
          </Typography>
        </Container>
      </Container>
      <Container
        sx={{
          width: "100%",
          marginRight: "100%",
          marginTop: "2rem",
          padding: "2rem",
          borderTop: "2px solid rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h6" sx={{ marginLeft: ".5rem" }}>
          {order.boughtItems.length === 1 ? "Produkt" : "Produkter"}
        </Typography>

        {order.boughtItems.map((item) => (
          <div key={item.product.id} style={productInfoStyle}>
            <Box
              component="img"
              alt={item.product.title}
              src={item.product.image}
              sx={{ height: 100, width: 100 }}
            ></Box>
            <Typography>{item.product.title}</Typography>
            <Typography>{item.quantity} st</Typography>
            <Typography>{item.product.price} kr</Typography>
            <Typography>
              {item.quantity * item.product.price} kr totalt
            </Typography>
          </div>
        ))}
      </Container>
    </div>
  );
};

const rootStyle: CSSProperties = {
  display: "flex",
};

const productInfoStyle: CSSProperties = {
  marginTop: ".5rem",
  padding: ".5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

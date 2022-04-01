import { Box, Container, Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import { useOrderContext } from "../context/OrderContext";
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import { useCart } from "../context/CartContext";
import Grid from '@mui/material/Grid';

export const OrderOverview = () => {
  const { order } = useOrderContext();
  const { getTotalSumExShip } = useCart();

  const priceOfProducts = getTotalSumExShip(order.boughtItems);
  const priceShipping = order.shippingPrice;
  const priceTotal = priceOfProducts + priceShipping;

  const { emptyCart } = useCart();

  const handleOnClickClean = () => {
      console.log("yo we waiting")
      emptyCart();
      alert("Köp genomfört")
  }

  const clean = () => {
    console.log("started waiting")
    delay(1000).then(() => handleOnClickClean());
  }

  const delay = time =>
  new Promise(resolve => {
  setTimeout(resolve, time);
});

  return (
    <div>
      <Container sx={{ display: "flex", }}>
        <Grid container columns={{ xs: 6, sm: 6, md: 12, lg: 12 }}>

          <Grid style={gridItem} item xs={12} md={6} lg={3}>
            <Container sx={{ display: "flex", flexDirection: "column", }}>
              <Typography variant="h6">Mina uppgifter</Typography>
              <Typography>
                {order.customer.firstName} {order.customer.lastName}
              </Typography>
              <Typography>
                {order.customer.address} {order.customer.zipcode}
              </Typography>
              <Typography>{order.customer.city}</Typography>
              <Typography>{order.customer.email}</Typography>
            </Container>
          </Grid>

          <Grid style={gridItem} item xs={12} md={6} lg={3}>
            <Container sx={{ display: "flex", flexDirection: "column", }}>
              <Typography variant="h6">Leveransmetod</Typography>
              <Typography>{order.shippingMethod}</Typography>
              <Typography>{order.shippingPrice} kr</Typography>
            </Container>
          </Grid>

          <Grid style={gridItem} item xs={12} md={6} lg={3}>
            <Container sx={{ display: "flex", flexDirection: "column", }}>
              <Typography variant="h6">Betalmetod</Typography>
              <Typography>
                {order.paymentMethod === "swish"
                  ? order.paymentMethod + " med nr: " + order.customer.number
                  : order.paymentMethod}
              </Typography>
            </Container>
          </Grid>

          <Grid style={gridItem} item xs={12} md={6} lg={3}>
            <Container sx={{ display: "flex", flexDirection: "column", }}>
              <Typography variant="h6">
                Totalpris: {priceTotal} kr{" "}
                
              </Typography>
              <Typography variant="subtitle2">
                <span style={{ fontSize: "15px", color: "grey" }}>(ink moms)</span>
              </Typography>

            </Container>
          </Grid>
        </Grid>
      </Container>

      <Container
        sx={{
          width: "100%",
          marginRight: "auto",
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
            <Grid container columns={{ xs: 6, sm: 6, md: 12, lg: 12 }}>

              <Grid style={gridItem} item xs={12} md={3} lg={3}>
                <Box
                component="img"
                alt={item.product.title}
                src={item.product.image}
                sx={{ height: 100, width: 100 }}
                />
              </Grid>
              <Grid style={gridItem} item xs={12} md={3} lg={3}>
                <Typography>{item.product.title}</Typography>
              </Grid>
              <Grid style={gridItem} item xs={12} md={3} lg={3}>
                <Typography>{item.quantity} st</Typography>
              </Grid>
              <Grid style={gridItem} item xs={12} md={3} lg={3}>
                <Typography>{item.product.price} kr</Typography>
              </Grid>
              <Grid style={gridItem} item xs={12} md={3} lg={3}>
              <Typography> {item.quantity * item.product.price} kr totalt</Typography>
              </Grid>
            </Grid>

            
 


          </div>
        ))}
      </Container>
      <div style={{display: "flex", justifyContent: "right"}}>
        <Link to={"/order"}>
          <Button sx={SubmitButton} type="submit" variant="contained" onClick={clean}>Slutför Köp</Button>
        </Link>
      </div>
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

const SubmitButton: CSSProperties = {
  backgroundColor: "#BFD8D5",
  color: "#333333",
  padding: "0.5rem",
  width: "8rem",
  boxShadow: "none",
  textDecoration: "none",
};

const gridItem: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
  marginBottom: "10px",
};
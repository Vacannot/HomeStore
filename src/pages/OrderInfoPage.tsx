import React, { CSSProperties } from 'react';
import { Button, Container, Typography, } from '@mui/material';
import { useOrderContext } from '../context/OrderContext';
import { useCart } from '../context/CartContext'
import { FinishedOrderInfoDiv } from '../components/FinishedOrderInfoDiv'


const OrderInfoPage = () => {
    const {
        order,
        generateOrderId,
        createNewOrder,
        setShippingMethod,
        setPaymentMethod,
        // emptyOrder
    }  = useOrderContext();
    
    const {getTotalSumExShip, emptyCart} = useCart();

    const priceOfProducts = getTotalSumExShip(order.boughtItems);

    console.log(getTotalSumExShip(order.boughtItems));

  

    const priceShipping = order.shippingPrice;
    const priceTotal = priceOfProducts + priceShipping;
    const priceVAT = Math.round(priceOfProducts * 0.25);
    console.log(priceOfProducts);
    
    // const handleOnClick = () => {
    //     emptyOrder();
    // }

    return(
        <Container maxWidth='sm'>
            <Typography variant='h5' sx={{mt: 10, mb: 3}}>Tack för din beställning!</Typography>
            <div>
                <Typography variant='body1'>Ordernummer: <span style={boldFont}>{order.orderId}</span></Typography>
                <Typography variant='body1'>
                    Bekräftelsemail och kvitto skickars till mail <span style={boldFont}>{order.customer.email}</span> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </div>
            <Container>
            <Typography sx={{mt: 1, mr: 1}} variant='body2'>Information om din beställning:</Typography>
                {order.boughtItems.map((item) => 
                <FinishedOrderInfoDiv product={item} key={item.product.id}/>
                )}
            </Container>
            <Container>
                <div style={priceInfoStyle}>
                    <p>Frakt:</p>
                    <p>{order.shippingMethod}</p>
                    <p>{order.shippingPrice}</p>
                </div>
                <div style={priceInfoStyle}>
                    <p>Totalt:</p>
                    <p>{priceTotal} kr</p>
                </div>
                <div style={priceInfoStyle}>
                    <p>Varav Moms:</p>
                    <p>{priceVAT} kr</p>
                </div>
            </Container>
        
            <div>
                <Typography variant="h6" sx={{marginTop: '1rem'}}>Leveransinformation:</Typography>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span>{order.customer.firstName} {order.customer.lastName}</span>
                    <span>{order.customer.address}</span>
                    <span>{order.customer.zipcode} {order.customer.city}</span>
                </div>
            </div>
                <Button sx={ButtonStyle} variant="contained">
                Gå till startsidan
                </Button>
         </Container>
        
    )
}

const ButtonStyle: CSSProperties = {
  display: "block",
  backgroundColor: "#BFD8D5",
  margin: ".5rem auto",
  padding: "0.5rem",
  boxShadow: "none",
};

const productInfoDivStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  border: "2px solid grey",
  background: "#f3f3f3",
  margin: "1rem",
};

const priceInfoStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  background: "grey",
  margin: "0 1rem",
};

const boldFont: CSSProperties = {
  fontWeight: "bold",
};

export default OrderInfoPage;

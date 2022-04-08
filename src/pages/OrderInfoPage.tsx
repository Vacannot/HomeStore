import React, { CSSProperties } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { useOrderContext } from '../context/OrderContext';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FinishedOrderInfoDiv } from '../components/FinishedOrderInfoDiv';

const OrderInfoPage = () => {
  const { order } = useOrderContext();
  const { getTotalSumExShip } = useCart();

  const priceOfProducts = getTotalSumExShip(order.boughtItems);
  const priceShipping = order.shippingPrice;
  const priceTotal = priceOfProducts + priceShipping;
  const priceVAT = Math.round(priceOfProducts * 0.25);

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" sx={{ mt: 10, mb: 3 }}>
        Tack för din beställning!
      </Typography>
      <div>
        <Typography variant="body1">
          Ordernummer: <span style={boldFont}>{order.orderId}</span>
        </Typography>
        <Typography variant="body1">
          Bekräftelsemail och kvitto skickars till mail{' '}
          <span style={boldFont}>{order.customer.email}</span> adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>
      <Container>
        <Typography sx={{ mt: 1, mr: 1 }} variant="body2">
          Information om din beställning:
        </Typography>
        {order.boughtItems.map((item) => (
          <FinishedOrderInfoDiv product={item} key={item.product.id} />
        ))}
      </Container>
      <Container sx={{ priceInfoContainerStyle }}>
        <div style={priceInfoStyle}>
          <p>Frakt:</p>
          <p>{order.shippingMethod}</p>
          <p>{order.shippingPrice}</p>
        </div>
        <div style={priceInfoStyle}>
          <p>Totalt:</p>
          <p>{priceTotal} kr</p>
        </div>
        <div style={VATInfoStyle}>
          <p>Varav Moms:</p>
          <p>{priceVAT} kr</p>
        </div>
      </Container>

      <div>
        <Typography variant="h6" sx={{ marginTop: '1rem' }}>
          Leveransinformation:
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>
            {order.customer.firstName} {order.customer.lastName}
          </span>
          <span>{order.customer.address}</span>
          <span>
            {order.customer.zipcode} {order.customer.city}
          </span>
        </div>
      </div>
      <Link to="/">
        <Button sx={ButtonStyle} variant="contained">
          Gå till startsidan
        </Button>
      </Link>
    </Container>
  );
};

const ButtonStyle: CSSProperties = {
  display: 'block',
  backgroundColor: '#BFD8D5',
  margin: '.5rem auto',
  padding: '0.5rem',
  boxShadow: 'none',
};

const productInfoDivStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  border: '2px solid grey',
  background: '#f3f3f3',
  margin: '1rem',
};

const priceInfoStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 1rem',
};

const priceInfoContainerStyle: CSSProperties = {
  border: '2px solid grey',
  backgroundColor: 'red',
};

const VATInfoStyle: CSSProperties = {
  fontSize: '14px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 1rem',
};

const boldFont: CSSProperties = {
  fontWeight: 'bold',
};

export default OrderInfoPage;

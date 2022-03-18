import React, { CSSProperties } from 'react';
import { Button, Container, Typography, } from '@mui/material';
import Logo from '../components/Logo'

const OrderInfoPage = () => {
    return(
        <Container>
            <Typography variant='h5' sx={{mt: 10, mb: 3}}>Tack för din beställning!</Typography>
            <Container>
                <Typography variant='body1'>Ordernummer: 00000</Typography>
                <Typography variant='body1'>
                    Bekräftelsemail och kvitto skickars till mail adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </Container>
            <Container>
                {/* map() items in cart */}
                <div style={productInfoDivStyle}>
                    <p>Title of product</p>
                    <p>123kr</p>
                </div>
               
            </Container>
            <Container>
                <div style={priceInfoStyle}>
                    <p>Frakt:</p>
                    <p>Fraktsätt</p>
                    <p>59kr</p>
                </div>
                <div style={priceInfoStyle}>
                    <p>Totalt:</p>
                    <p>428kr</p>
                </div>
                <div style={priceInfoStyle}>
                    <p>Varav Moms:</p>
                    <p>29kr</p>
                </div>
            </Container>
        
            <Container>
                <Typography variant="h5">Leveransinformation:</Typography>
                <div>
                    <p>namn namnsson</p>
                    <p>Adressgatan 0</p>
                    <p>123 45 Stad</p>
                </div>
            </Container>
            <Logo />
            <Button sx={ButtonStyle} variant="contained">
              Gå till startsidan
            </Button>

         </Container>
        
    )
}

const ButtonStyle: CSSProperties = {
    display: 'block',
    backgroundColor: "#BFD8D5",
    margin: '.5rem auto',
    padding: "0.5rem",
    boxShadow: "none",
};

const productInfoDivStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px solid grey',
    background: '#f3f3f3'
};

const priceInfoStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'grey'
};

export default OrderInfoPage;
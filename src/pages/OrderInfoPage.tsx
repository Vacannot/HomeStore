import React, { CSSProperties } from 'react';
import { Button, Container, Typography, } from '@mui/material';


const OrderInfoPage = () => {
    return(
        <Container maxWidth='sm'>
            <Typography variant='h5' sx={{mt: 10, mb: 3}}>Tack för din beställning!</Typography>
            <div>
                <Typography variant='body1'>Ordernummer: <span style={boldFont}>00000</span></Typography>
                <Typography variant='body1'>
                    Bekräftelsemail och kvitto skickars till mail <span style={boldFont}>mail@mail.com</span> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </div>
            <Container >
                {/* map() items in cart */}
                <Typography sx={{mt: 1, mr: 1}} variant='body2'>Information om din beställning:</Typography>
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
        
            <div>
                <Typography variant="h6" sx={{marginTop: '1rem'}}>Leveransinformation:</Typography>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span>namn namnsson</span>
                    <span>Adressgatan 0</span>
                    <span>123 45 Stad</span>
                </div>
            </div>
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
    background: '#f3f3f3',
    margin: '1rem'
};

const priceInfoStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'grey',
    margin: '0 1rem',
};

const boldFont: CSSProperties = {
    fontWeight: 'bold',
}

export default OrderInfoPage;
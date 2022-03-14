import React, { CSSProperties } from 'react';
import { Typography, Container } from '@mui/material';
import image from '../assets/furniture.jpeg';

const CarouselItem = () => {
    return(
    <Container sx={rootStyle}>
        <img src={image} alt="" style={{width: '200px', height: '150px'}}/>
        <Typography variant="body2">placeholder</Typography>
     </Container>
    )
}
const rootStyle: CSSProperties = {
    height: "100%", 
    width: "300px", 
    border: '1px solid red'
}

export default CarouselItem;
import React from 'react';
import { Typography, Container } from '@mui/material';
import image from '../assets/furniture.jpeg';

const CarouselItem = () => {
    return(
    <Container>
        <img src={image} alt="" style={{width: '200px', height: '150px'}}/>
        <Typography variant="body2">placeholder</Typography>
     </Container>
    )
}

export default CarouselItem;
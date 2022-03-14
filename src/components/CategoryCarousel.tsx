import React from 'react';
import { Typography, div } from '@mui/material';
import CarouselItem from './CarouselItem';
import CartItemCard from './CartItemCard';
import { style } from '@mui/system';


const CategoryCarousel = () => {
    return(
        <div style={{border: '2px solid blue',display:'flex', flexDirection: 'column' ,width: '40rem', height:'15rem'}}>
            <Typography variant="h5">Categories</Typography>
            <div><span>AL</span>AR<span></span></div>
           
            <div style={{display: 'flex', gap: '10px', overflow: 'scroll'}}>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />

            </div>
            
        </div>
    )
}

export default CategoryCarousel;
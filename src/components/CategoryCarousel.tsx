import React, { CSSProperties } from 'react';
import { Typography } from '@mui/material';
import CarouselItem from './CarouselItem';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const CategoryCarousel = () => {
  return (
    <div style={rootStyle}>
      <Typography variant="h5" sx={{ m: 2 }}>
        Categories
      </Typography>
      <ArrowCircleLeftIcon sx={arrowStyleLeft}>AL</ArrowCircleLeftIcon>
      <ArrowCircleRightIcon sx={arrowStyleRight}>AR</ArrowCircleRightIcon>
      <div style={carouselItemsContainer}>
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
  );
};

const rootStyle: CSSProperties = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: '40rem',
  height: '17rem',
  position: 'relative',
};

const arrowStyleLeft: CSSProperties = {
  fontSize: '2rem',
  background: 'white',
  position: 'absolute',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  left: -1,
};

const arrowStyleRight: CSSProperties = {
  fontSize: '2rem',
  background: 'white',
  position: 'absolute',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  right: -1,
};
const carouselItemsContainer: CSSProperties = {
  height: '70%',
  display: 'flex',
  overflow: 'hidden',
  overflowX: 'scroll',
};

export default CategoryCarousel;

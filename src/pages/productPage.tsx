import React from 'react';
import { CSSProperties } from 'react';
import ProductCard from '../components/ProductCard';
import { Typography } from '@mui/material';
import { products } from '../mockedProducts';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const params = useParams<{ id: string }>();
  let matchingProduct;

  matchingProduct = products.find((item) => params.id === String(item.id));
  return (
    <div style={ProductContainer}>
      <Typography align="center" variant="h4" sx={{ m: 1 }}>
        Produktdetaljer
      </Typography>
      <ProductCard product={matchingProduct} />
    </div>
  );
}

const ProductContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '7rem',
};

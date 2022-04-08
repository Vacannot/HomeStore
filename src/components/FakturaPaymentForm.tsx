import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FakturaPaymentForm = () => {
  return (
    <div style={formDiv}>
      <Typography sx={{ display: 'flex', justifyContent: 'start' }}>
        Faktura kommer att skickas till din adress
      </Typography>
    </div>
  );
};

const formDiv: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  margin: '1rem',
};

export default FakturaPaymentForm;

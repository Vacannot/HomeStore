import React, { CSSProperties } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/system';
import Logo from './Logo';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    background: '#BFD8D5',
  },
});


export default function CheckoutHeader() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar variant="regular" sx={toolbarStyle}>
          <Link to="/">
            <Logo />
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

const toolbarStyle: CSSProperties = {
  display: 'flex',
  padding: '0 2rem',
  justifyContent: 'space-between',
  backgroundColor: '#BFD8D5',
};

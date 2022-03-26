import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import CartProvider, { useCart } from './context/CartContext';
import Layout from './layout/layout';
import ThemeProvider, { useTheme } from './context/themeContext';
// import { useTheme } from '@mui/material';

function App() {
	// const { theme } = useTheme();
	// const { cart } = useCart();

	return (
		<StrictMode>
			<BrowserRouter>
				{/* <CartProvider> */}
				<ThemeProvider>
					<Layout />
				</ThemeProvider>
				{/* </CartProvider> */}
			</BrowserRouter>
		</StrictMode>
	);
}

export default App;

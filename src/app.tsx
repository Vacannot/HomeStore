import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Layout from './layout/layout';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import { ColorModeContextProvider } from './context/ColorModeContext';
import { OrderContextProvider } from './context/OrderContext';

function App() {
	const theme = useTheme();

	return (
		<StrictMode>
			<BrowserRouter>
				<CartProvider>
					<ColorModeContextProvider>
						<ThemeProvider theme={theme}>
							<OrderContextProvider>
								<Layout />
							</OrderContextProvider>
						</ThemeProvider>
					</ColorModeContextProvider>
				</CartProvider>
			</BrowserRouter>
		</StrictMode>
	);
}

export default App;

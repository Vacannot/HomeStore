import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Layout from './layout/layout';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import { ColorModeContextProvider } from './context/ColorModeContext';
import { OrderContextProvider } from './context/OrderContext';

function App() {
	const theme = useTheme();

	// const [mode, setMode] = React.useState('light');
	// const colorMode = React.useMemo(
	// 	() => ({
	// 		// The dark mode switch would invoke this method
	// 		toggleColorMode: () => {
	// 			setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
	// 		},
	// 	}),
	// 	[],
	// );

	// // Update the theme only if the mode changes
	// const theme = React.useMemo(() => createTheme(theme(mode)), [mode]);

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

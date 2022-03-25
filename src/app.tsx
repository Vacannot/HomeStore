import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
import ThemeProvider, { useTheme } from './context/themeContext';
// import { useTheme } from '@mui/material';

function App() {
	const { theme } = useTheme();

	return (
		<StrictMode>
			<BrowserRouter>
				<ThemeProvider>
					<Layout />
				</ThemeProvider>
			</BrowserRouter>
		</StrictMode>
	);
}

export default App;

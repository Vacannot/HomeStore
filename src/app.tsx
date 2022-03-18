import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
// import ThemeProvider from './context/themeContext';

function App() {
	return (
		<StrictMode>
			<BrowserRouter>
				{/* <ThemeProvider value={darkTheme}> */}
				<Layout />
				{/* </ThemeProvider> */}
			</BrowserRouter>
		</StrictMode>
	);
}

export default App;

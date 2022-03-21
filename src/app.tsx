import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Context from './context/context';
import Layout from './layout/layout';

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

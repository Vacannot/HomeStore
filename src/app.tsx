import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';

function App() {
	return (
		<StrictMode>
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		</StrictMode>
	);
}

export default App;

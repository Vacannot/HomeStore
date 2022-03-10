import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default App;

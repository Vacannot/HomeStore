import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Context from './context/context';
import Layout from './layout/layout';

function App() {
	return (
		<StrictMode>
			<BrowserRouter>
			{/* <Context> */}
				<Layout />
			{/* </Context> */}
			</BrowserRouter>
		</StrictMode>
	);
}

export default App;

import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
import { ThemeContext, Theme } from './context/ThemeContext';

function App() {
	const [theme, setTheme] = React.useState(Theme.Light);

	return (
		<StrictMode>
			<BrowserRouter>
				<ThemeContext.Provider value={{ theme, setTheme }}>
					<Layout />
				</ThemeContext.Provider>
			</BrowserRouter>
		</StrictMode>
	);
}

export default App;

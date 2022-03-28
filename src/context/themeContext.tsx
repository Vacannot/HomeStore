import React, { useContext, useState } from 'react';
// import { Theme, ThemeContextType } from '@types/theme';

export type Theme = 'light' | 'dark';
export type ThemeContextType = {
	theme: Theme;
	changeTheme: (theme: Theme) => null;
};

export const ThemeContext = React.createContext<ThemeContextType | null>(null);
const ThemeUpdateContext = React.createContext<ThemeContextType | null>(null);

export function useTheme() {
	return useContext(ThemeContext);
}

export function useThemeUpdate() {
	return useContext(ThemeUpdateContext);
}

const ThemeProvider: React.FC<React.ReactNode> = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(true);

	function toggleTheme() {
		setDarkTheme((prevDarkTheme) => !prevDarkTheme);
	}

	return (
		<ThemeContext.Provider value={darkTheme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>{children}</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;

// import React from 'react';

// const themeContext = () => {
// 	return <div>themeContext</div>;
// };

// export default themeContext;

import { createContext, useContext } from 'react';

export enum Theme {
	Dark = 'Dark',
	Light = 'Light',
}

export type ThemeContextType = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

// export const ThemeContext = React.createContext<ThemeContextType | null>(null);
// const ThemeUpdateContext = React.createContext<ThemeContextType | null>(null);

// export function useTheme() {
// 	return useContext(ThemeContext);
// }

export const ThemeContext = createContext<ThemeContextType>({
	theme: Theme.Dark,
	setTheme: (theme) => console.warn('no theme provider'),
});

export const useThemeContext = () => useContext(ThemeContext);

// export function useThemeUpdate() {
// 	return useContext(ThemeUpdateContext);
// }

// const ThemeProvider: React.FC<React.ReactNode> = ({ children }) => {
// 	const [themeMode, setThemeMode] = React.useState<Theme>('Light');
// 	const { theme, changeTheme } = React.useContext(ThemeContext) as ThemeContextType;
// 	const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
// 		changeTheme(event.target.value as Theme);
// 	};

// 	// function toggleTheme() {
// 	// 	setThemeMode((prevDarkTheme) => !prevDarkTheme);
// 	// }

// 	return (
// 		<ThemeContext.Provider value={{ theme: themeMode, changeTheme: setThemeMode }}>
// 			{/* <ThemeUpdateContext.Provider value={toggleTheme}> */}
// 			{children}
// 			{/* </ThemeUpdateContext.Provider> */}
// 		</ThemeContext.Provider>
// 	);
// };

// export default ThemeProvider;

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export interface IColorModeContext {
	ToggleColorMode: () => void;
	mode: 'light' | 'dark';
}

export const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
	mode: 'light',
});

export const ColorModeContextProvider = ({ children }) => {
	const [mode, setMode] = React.useState<'light' | 'dark'>('light');
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
			mode,
		}),
		[mode],
	);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					primary: {
						main: '#BFD8D5',
						contrastText: '#fff',
					},
					secondary: {
						main: '#65716F',
						// main: '#373B38',
					},
				},
			}),
		[mode],
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export const useColorMode = () => React.useContext(ColorModeContext);

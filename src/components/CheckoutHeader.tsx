import React, { CSSProperties } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/system';
import Logo from './Logo';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { ColorModeContext } from '../context/ColorModeContext';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const theme = createTheme({
	palette: {
		background: '#BFD8D5',
	},
});

export default function CheckoutHeader() {
	const { mode, toggleColorMode } = React.useContext(ColorModeContext);
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));
	return (
		<>
			<CssBaseline />
			<AppBar>
				<Toolbar variant='regular' sx={toolbarStyle}>
					<Link to='/'>
						<Logo />
					</Link>
					<Box
						sx={{
							display: 'flex',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center',
							bgcolor: 'background.default',
							color: 'text.primary',
							borderRadius: 1,
							p: 3,
						}}>
						<IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color='inherit'>
							{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
}

const toolbarStyle: CSSProperties = {
	display: 'flex',
	alignSelf: 'center',
	width: '80%',
	maxWidth: '83rem',
	padding: '0 1rem',
	justifyContent: 'space-between',
	backgroundColor: '#BFD8D5',
};

const iconsDivStyle: CSSProperties = {
	display: 'flex',
	width: '12rem',
	justifyContent: 'space-between',
	textDecoration: 'none',
	textDecorationColor: 'black',
	color: 'black',
};

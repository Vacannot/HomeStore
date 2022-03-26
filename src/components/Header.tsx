import React, { CSSProperties } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { CssBaseline } from '@mui/material';
import Search from './Search';
import Logo from './Logo';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

export default function Header() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
		'& .MuiBadge-badge': {
			right: -3,
			top: 13,
			border: `2px solid ${theme.palette.background.paper}`,
			padding: '0 4px',
		},
	}));

	return (
		<>
			<CssBaseline />
			<AppBar style={appBarStyle}>
				<Toolbar variant='regular' sx={toolbarStyle}>
					<Link to='/'>
						<Logo />
					</Link>
					<Search />
					<div style={iconsDivStyle}>
						<Link to='/favoriter'>
							<StyledBadge badgeContent={0} color='success'>
								<FavoriteBorderOutlinedIcon sx={{ fontSize: 28, color: 'black' }} />
							</StyledBadge>
						</Link>
						<Link to='/varukorg'>
							<StyledBadge badgeContent={1} color='success'>
								<ShoppingCartOutlinedIcon sx={{ fontSize: 28, color: 'black' }} />
							</StyledBadge>
						</Link>
						<MenuIcon sx={{ fontSize: 28, color: 'black' }} />
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
}
const appBarStyle: CSSProperties = {
	backgroundColor: '#BFD8D5',
};

const iconsDivStyle: CSSProperties = {
	display: 'flex',
	width: '8rem',
	justifyContent: 'space-between',
	textDecoration: 'none',
	textDecorationColor: 'black',
	color: 'black',
};

const toolbarStyle: CSSProperties = {
	display: 'flex',
	alignSelf: 'center',
	width: '80%',
	maxWidth: '83rem',
	padding: '0 1rem',
	justifyContent: 'space-between',
	backgroundColor: '#BFD8D5',
};

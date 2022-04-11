import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import CssBaseline from '@mui/material/CssBaseline';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: '100px',
	backgroundColor: alpha(theme.palette.common.white, 0.5),
	'&:focus': {
		backgroundColor: alpha(theme.palette.common.white, 0.9),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: 'auto',
	[theme.breakpoints.up('sm')]: {
		backgroundColor: alpha(theme.palette.common.white, 0.5),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.7),
		},
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 1.5),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'black',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '0',
		'&:focus': {
			width: '15ch',
		},
		[theme.breakpoints.up('sm')]: {
			width: '15ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

export default function Search() {
	return (
		<>
			<CssBaseline />
			<SearchBar>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase placeholder='Sök produkt' inputProps={{ 'aria-label': 'search' }} />
			</SearchBar>
		</>
	);
}

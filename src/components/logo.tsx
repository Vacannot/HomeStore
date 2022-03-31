import React from 'react';
import bigLogo from '../assets/logos/logo.png';
import smallLogo from '../assets/logos/small-logo.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Logo() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return <>{matches === true ? <img src={bigLogo} /> : <img src={smallLogo} />}</>;
}

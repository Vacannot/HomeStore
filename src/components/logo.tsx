import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import bigLogo from './assets/logo.png';
import smallLogo from './assets/small-logo.png';

function Logo() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return <>{matches === true ? <img src={bigLogo} /> : <img src={smallLogo} />}</>;
}
export default Logo;

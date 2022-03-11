import React from 'react';
// import React, { CSSProperties } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright() {
	return (
		<Typography variant='body2' color='text.secondary'>
			{'Copyright © '}Homestore {new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}
const Footer = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
			}}>
			<CssBaseline />
			<Box
				component='footer'
				sx={{
					py: 3,
					px: 2,
					mt: 'auto',
				}}
				// style={rootStyle}
			>
				<Container maxWidth='sm'>
					<Copyright />
				</Container>
			</Box>
		</Box>
	);
};

// const rootStyle: CSSProperties = {
// 	margin: 'auto',
// };

export default Footer;

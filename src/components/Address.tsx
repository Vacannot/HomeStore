import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CSSProperties } from '@mui/styled-engine';
import { TextField, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';

export default function Address() {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }} component='form' autoComplete='on'>
			<form>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<div style={{ display: 'flex', flexDirection: 'column', margin: '.5rem' }}>
						<TextField
							sx={{ marginTop: '.5rem', width: '40ch' }}
							required
							id='outlined-required'
							type='name'
							label='Förnamn'
							placeholder='Förnamn'
						/>
						<TextField
							sx={{ marginTop: '.5rem', width: '40ch' }}
							required
							id='outlined-required'
							type='name'
							label='Efternamn'
							placeholder='Efternamn'
						/>
						<TextField
							sx={{ marginTop: '.5rem', width: '40ch' }}
							required
							id='outlined-number'
							type='number '
							label='Telefon'
							placeholder='Telefon'
						/>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', margin: '.5rem' }}>
						<TextField
							sx={{ marginTop: '.5rem', width: '40ch' }}
							required
							id='outlined-required'
							type='adress'
							label='Adress'
							placeholder='Adress'
						/>
						<TextField
							sx={{ marginTop: '.5rem', width: '40ch' }}
							required
							id='outlined-required'
							type='postcode'
							label='Postnummer'
							placeholder='Postnummer'
						/>
						<TextField
							sx={{ marginTop: '.5rem', width: '40ch' }}
							required
							id='outlined-required'
							type='city'
							label='Stad'
							placeholder='Stad'
						/>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'end',
						gap: '2rem',
					}}>
					{/* <Link to='/shippingpage'> */}
					<Button sx={ButtonStyle} variant='contained'>
						Fortsätt
					</Button>
					{/* </Link> */}
				</div>
			</form>
		</Box>
	);
}

const ButtonStyle: CSSProperties = {
	backgroundColor: '#BFD8D5',
	margin: '.5rem',
	padding: '.5rem',
	width: '8rem',
	boxShadow: 'none',
};
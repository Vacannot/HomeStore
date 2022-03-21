import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CSSProperties } from '@mui/styled-engine';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface StyledFormControlLabelProps extends FormControlLabelProps {
	checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
	<FormControlLabel {...props} />
))(({ theme, checked }) => ({
	'.MuiFormControlLabel-label': checked && {
		color: theme.palette.primary.main,
	},
}));

function MyFormControlLabel(props: FormControlLabelProps) {
	const radioGroup = useRadioGroup();

	let checked = false;

	if (radioGroup) {
		checked = radioGroup.value === props.value;
	}

	return <StyledFormControlLabel checked={checked} {...props} />;
}

export default function Shipping() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Paper
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						backgroundColor: '#F4F3F3',
						borderRadius: '0.5rem',
						padding: '1rem',
						width: '28rem',
						height: '12rem',
					}}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						<Typography style={{ fontWeight: '600' }}>Dina uppgifter</Typography>
						<div>
							<Button variant='text' style={{ color: 'black' }}>
								Edit
							</Button>
						</div>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<Typography>Namn Efternamn</Typography> {/* Import from previous page */}
						<Typography>Mail</Typography> {/* Import from previous page */}
						<Typography>Telefonnummer</Typography> {/* Import from previous page */}
						<Typography>Adress</Typography> {/* Import from previous page */}
						<Typography>Postnummer, Stad</Typography> {/* Import from previous page */}
					</div>
				</Paper>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '1rem',
					}}>
					<RadioGroup name='use-radio-group' defaultValue='first'>
						<Box style={{ display: 'flex', flexDirection: 'row' }}>
							<MyFormControlLabel value='first' label='1' control={<Radio />} />
							<Paper sx={shippingButton}>
								<h4 style={{ margin: '0' }}>Express 24h</h4>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<h4 style={{ margin: '0' }}>DHL</h4>
									<div>Price: 149kr</div>
								</div>
							</Paper>
						</Box>
						<Box style={{ display: 'flex', flexDirection: 'row' }}>
							<MyFormControlLabel value='second' label='2' control={<Radio />} />
							<Paper sx={shippingButton}>
								<h4 style={{ margin: '0' }}>Standard 48h</h4>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<h4 style={{ margin: '0' }}>Postnord</h4>
									<div>Price: 59kr</div>
								</div>
							</Paper>
						</Box>
						<Box style={{ display: 'flex', flexDirection: 'row' }}>
							<MyFormControlLabel value='third' label='3' control={<Radio />} />
							<Paper sx={shippingButton}>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<h4 style={{ margin: '0' }}>Click and Collect</h4>
									<div>3-5 arbetsdagar</div>
								</div>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<h4 style={{ margin: '0' }}>Instabox</h4>
									<div>Price: 0kr</div>
								</div>
							</Paper>
						</Box>
					</RadioGroup>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'end',
					gap: '2rem',
				}}>
				<Button sx={ButtonStyle} variant='contained'>
					Fortsätt
				</Button>
			</div>
		</Box>
	);
}

const ButtonStyle: CSSProperties = {
	backgroundColor: '#BFD8D5',
	marginTop: '2rem',
	padding: '0.5rem',
	width: '8rem',
	boxShadow: 'none',
	textDecoration: 'none',
};

const ButtonStyleSmall: CSSProperties = {
	backgroundColor: '#BFD8D5',
	padding: '0.5rem',
	width: '4rem',
	boxShadow: 'none',
	textDecoration: 'none',
	color: 'black',
};

const shippingButton: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: '#F4F3F3',
	padding: '1rem',
	justifyContent: 'space-between',
	color: '#333333',
	marginTop: '1rem',
	width: '25rem',
};

const cancelButton: CSSProperties = {
	marginTop: '2rem',
	color: 'black',
	borderColor: 'black',
	padding: '0.5rem',
	width: '8rem',
	textDecoration: 'none',
};

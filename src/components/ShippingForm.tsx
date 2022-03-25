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

export default function ShippingForm() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
		</Box>
	);
}


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
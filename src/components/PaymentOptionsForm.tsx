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

export default function PaymentOptionsForm() {
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
							<MyFormControlLabel value='card' label='1' control={<Radio />} />
							<Paper sx={paymentOptionButton}>
								<h4 style={{ margin: '0' }}>Direktbetalning med kort</h4>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<h4 style={{ margin: '0' }}>Visa, MasterCard, etc.</h4>
									<div>Pris: 0kr</div>
								</div>
							</Paper>
						</Box>
						<Box style={{ display: 'flex', flexDirection: 'row' }}>
							<MyFormControlLabel value='swish' label='2' control={<Radio />} />
							<Paper sx={paymentOptionButton}>
								<h4 style={{ margin: '0' }}>Direktbetalning med Swish</h4>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<div>Pris: 0kr</div>
								</div>
							</Paper>
						</Box>
						<Box style={{ display: 'flex', flexDirection: 'row' }}>
							<MyFormControlLabel value='faktura' label='3' control={<Radio />} />
							<Paper sx={paymentOptionButton}>
                                <h4 style={{ margin: '0' }}>Betala med Faktura</h4>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<div>Pris: 39kr</div>
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

const paymentOptionButton: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: '#F4F3F3',
	padding: '1rem',
	justifyContent: 'space-between',
	color: '#333333',
	marginTop: '1rem',
	width: '25rem',
};
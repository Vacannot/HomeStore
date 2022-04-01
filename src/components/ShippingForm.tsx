import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CSSProperties } from '@mui/styled-engine';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useOrderContext } from '../context/OrderContext';

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
	const { order } = useOrderContext();
	const radioGroup = useRadioGroup();
	let checked = false;

	if (radioGroup) {
		checked = radioGroup.value === props.value;
	}
	return <StyledFormControlLabel checked={checked} {...props} />;
}

export default function ShippingForm() {
	const { setShippingMethod } = useOrderContext(); 
	const [shippingState, setShippingState] = useState('')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log('radiochange');
		setShippingMethod(event.target.value);
	}

	let date = new Date();

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
					<RadioGroup name='use-radio-group' defaultValue='none' onChange={handleChange}>
						<Box style={{ display: 'flex', flexDirection: 'row' }}>
							<MyFormControlLabel value='DHL' label='' control={<Radio />} />
							<Paper sx={shippingButton}>
								<h4 style={{ margin: '0' }}>Express 24h</h4>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<h4 style={{ margin: '0' }}>DHL</h4>
									<div>Price: 149kr</div>
								</div>

								<div>Förväntat leverans datum: 2022/{date.getMonth() + 1}/{date.getDate() + 1}</div>

							</Paper>
						</Box>
						<Box style={{ display: 'flex', flexDirection: 'row' }}>
							<MyFormControlLabel value='Postnord' label='' control={<Radio />} />
							<Paper sx={shippingButton}>
								<h4 style={{ margin: '0' }}>Standard 48h</h4>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<h4 style={{ margin: '0' }}>Postnord</h4>
									<div>Price: 59kr</div>
								</div>

								<div>Förväntat leverans datum: 2022/{date.getMonth() + 1}/{date.getDate() + 2}</div>

							</Paper>
						</Box>
						<Box style={{ display: 'flex', flexDirection: 'row' }}>
							<MyFormControlLabel value='Flaskpost' label='' control={<Radio />} />
							<Paper sx={shippingButton}>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<h4 style={{ margin: '0' }}>Långsam Flaskpost</h4>
									<div>3-5 månader</div>
								</div>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<h4 style={{ margin: '0' }}>Flaskpost</h4>
									<div>Price: 0kr</div>
								</div>

								<div>Förväntat leverans datum: 2022/{date.getMonth() + 4}/{date.getDate() + 5}</div>

							</Paper>
						</Box>
					</RadioGroup>
				</div>
			</div>
		</Box>
	);
}

const shippingButton: CSSProperties = {
	display: "flex",
	flexDirection: "column",
	backgroundColor: "#F4F3F3",
	padding: "1rem",
	justifyContent: "space-between",
	color: "#333333",
	marginTop: "1rem",
	width: "25vw",
	minWidth: "200px"
};

const ButtonStyle: CSSProperties = {
	backgroundColor: "#BFD8D5",
	color: "#333333",
	marginTop: "2rem",
	padding: "0.5rem",
	width: "8rem",
	boxShadow: "none",
	textDecoration: "none",
  };

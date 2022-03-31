import React, { CSSProperties } from 'react';
import Typography from '@mui/material/Typography';

const InvoicePaymentForm = () => {
	return (
		<div style={formDiv}>
			<Typography sx={{ display: 'flex', justifyContent: 'start' }}>
				Faktura kommer att skickas till din adress
			</Typography>
		</div>
	);
};

const formDiv: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
};

export default InvoicePaymentForm;

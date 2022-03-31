import React, { CSSProperties, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { useOrderContext } from '../context/OrderContext';

const validationSchema = yup.object({
	swishNumber: yup.string().required('Please enter number').min(10),
});

const SwishPaymentForm = () => {
	const { order } = useOrderContext();

	const formik = useFormik({
		initialValues: {
			swishNumber: order.customer.number,
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div style={formDiv}>
			<form onSubmit={formik.handleSubmit}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
					}}>
					{/* <Typography sx={{ display: 'flex', justifyContent: 'start' }}>
						Swish Number
					</Typography> */}
					<TextField
						style={textFieldStyle}
						id='swishNumber'
						name='swishNumber'
						label='Swish nummer'
						fullWidth
						value={formik.values.swishNumber}
						onChange={formik.handleChange}
						error={formik.touched.swishNumber && Boolean(formik.errors.swishNumber)}
						helperText={formik.touched.swishNumber && formik.errors.swishNumber}
					/>
				</div>
			</form>
		</div>
	);
};

const formDiv: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
};

const textFieldStyle: CSSProperties = {
	margin: '1rem',
	display: 'flex',
	width: '40ch',
};

export default SwishPaymentForm;

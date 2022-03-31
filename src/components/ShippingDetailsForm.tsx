import React, { CSSProperties } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

interface ShippingDetailsFormValues {
	firstName: string;
	lastName: string;
	email: string;
	number: string;
	adress: string;
	zipcode: number;
	country: string;
	city: string;
}

const validationSchema = yup.object({
	firstName: yup.string().required('Ange förnamn').min(2),
	lastName: yup.string().required('Ange efternamn').min(2),
	email: yup.string().required('Ange giltlig email'),
	number: yup.number().required('Ange telefonnumer').min(10),
	address: yup.string().required('Ange adress').min(8),
	zipcode: yup.number().required('Ange postnummer').min(5),
	city: yup.string().required('Ange stad').min(2),
	country: yup.string().required('Ange land').min(2),
});

const ShippingDetailsForm = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			number: '',
			address: '',
			zipcode: '',
			city: '',
			country: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div style={formDiv}>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
						}}>
						<TextField
							style={textFieldStyle}
							variant='standard'
							id='firstName'
							name='firstName'
							label='Förnamn'
							fullWidth
							value={formik.values.firstName}
							onChange={formik.handleChange}
							error={formik.touched.firstName && Boolean(formik.errors.firstName)}
							helperText={formik.touched.firstName && formik.errors.firstName}
						/>
						<TextField
							style={textFieldStyle}
							variant='standard'
							id='lastName'
							name='lastName'
							label='Efternamn'
							fullWidth
							value={formik.values.lastName}
							onChange={formik.handleChange}
							error={formik.touched.lastName && Boolean(formik.errors.lastName)}
							helperText={formik.touched.lastName && formik.errors.lastName}
						/>
						<TextField
							style={textFieldStyle}
							variant='standard'
							id='email'
							name='email'
							label='E-post'
							fullWidth
							value={formik.values.email}
							onChange={formik.handleChange}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
						/>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
						}}>
						<TextField
							style={textFieldStyle}
							variant='standard'
							id='number'
							name='number'
							label='Telefonnummer'
							fullWidth
							value={formik.values.number}
							onChange={formik.handleChange}
							error={formik.touched.number && Boolean(formik.errors.number)}
							helperText={formik.touched.number && formik.errors.number}
						/>
						<TextField
							style={textFieldStyle}
							variant='standard'
							id='address'
							name='address'
							label='Adress'
							fullWidth
							value={formik.values.address}
							onChange={formik.handleChange}
							error={formik.touched.address && Boolean(formik.errors.address)}
							helperText={formik.touched.address && formik.errors.address}
						/>
						<TextField
							style={textFieldStyle}
							variant='standard'
							id='zipcode'
							name='zipcode'
							label='Postnummer'
							fullWidth
							value={formik.values.zipcode}
							onChange={formik.handleChange}
							error={formik.touched.zipcode && Boolean(formik.errors.zipcode)}
							helperText={formik.touched.zipcode && formik.errors.zipcode}
						/>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
						}}>
						<TextField
							style={textFieldStyle}
							variant='standard'
							id='city'
							name='city'
							label='Ort'
							fullWidth
							value={formik.values.city}
							onChange={formik.handleChange}
							error={formik.touched.city && Boolean(formik.errors.city)}
							helperText={formik.touched.city && formik.errors.city}
						/>
						<TextField
							style={textFieldStyle}
							variant='standard'
							id='country'
							name='country'
							label='Land'
							fullWidth
							value={formik.values.country}
							onChange={formik.handleChange}
							error={formik.touched.country && Boolean(formik.errors.country)}
							helperText={formik.touched.country && formik.errors.country}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

const textFieldStyle: CSSProperties = {
	margin: '1rem',
	display: 'flex',
	width: '40ch',
};

const formDiv: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
};

export default ShippingDetailsForm;

import React, { CSSProperties } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useOrderContext } from '../context/OrderContext';

interface UserInputFormValues {
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
	firstName: yup.string().required('Please enter first name').min(2),
	lastName: yup.string().required('Please enter last name').min(2),
	email: yup.string().email('Please enter a valid email'),
	number: yup.number().required('Please enter number').min(10),
	address: yup.string().required('Enter your adress').min(8),
	zipcode: yup.number().required('Enter your zipcode').min(5),
	city: yup.string().required('Enter your City').min(2),
	country: yup.string().required('Enter your country').min(2),
});

const UserInputForm = () => {
	const { createNewOrder } = useOrderContext();

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
			console.log(values);
			createNewOrder(values);
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
							id='firstName'
							name='firstName'
							label='Förnamn'
							inputProps={{ maxLength: 20 }}
							InputProps={{
								disableUnderline: true,
							}}
							fullWidth
							value={formik.values.firstName}
							onChange={formik.handleChange}
							error={formik.touched.firstName && Boolean(formik.errors.firstName)}
							helperText={formik.touched.firstName && formik.errors.firstName}
						/>
						<TextField
							style={textFieldStyle}
							id='lastName'
							name='lastName'
							label='Efternamn'
							inputProps={{ maxLength: 20 }}
							InputProps={{
								disableUnderline: true,
							}}
							fullWidth
							value={formik.values.lastName}
							onChange={formik.handleChange}
							error={formik.touched.lastName && Boolean(formik.errors.lastName)}
							helperText={formik.touched.lastName && formik.errors.lastName}
						/>
						<TextField
							style={textFieldStyle}
							id='email'
							name='email'
							label='E-post'
							inputProps={{ maxLength: 25 }}
							InputProps={{
								disableUnderline: true,
							}}
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
							type='tel'
							id='number'
							name='number'
							label='Telefonnummer'
							inputProps={{ maxLength: 10, minLength: 10 }}
							InputProps={{
								disableUnderline: true,
							}}
							fullWidth
							value={formik.values.number}
							onChange={formik.handleChange}
							error={formik.touched.number && Boolean(formik.errors.number)}
							helperText={formik.touched.number && formik.errors.number}
						/>
						<TextField
							style={textFieldStyle}
							id='address'
							name='address'
							label='Adress'
							inputProps={{ maxLength: 20 }}
							InputProps={{
								disableUnderline: true,
							}}
							fullWidth
							value={formik.values.address}
							onChange={formik.handleChange}
							error={formik.touched.address && Boolean(formik.errors.address)}
							helperText={formik.touched.address && formik.errors.address}
						/>
						<TextField
							style={textFieldStyle}
							type='tel'
							id='zipcode'
							name='zipcode'
							label='Zipcode'
							inputProps={{ maxLength: 5, minLength: 10 }}
							InputProps={{
								disableUnderline: true,
							}}
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
							id='city'
							name='city'
							label='City'
							fullWidth
							value={formik.values.city}
							onChange={formik.handleChange}
							error={formik.touched.city && Boolean(formik.errors.city)}
							helperText={formik.touched.city && formik.errors.city}
						/>
						<TextField
							style={textFieldStyle}
							id='country'
							name='country'
							label='Country'
							fullWidth
							value={formik.values.country}
							onChange={formik.handleChange}
							error={formik.touched.country && Boolean(formik.errors.country)}
							helperText={formik.touched.country && formik.errors.country}
						/>
					</div>
				</div>
				<div style={ButtonDiv}>
					<Button sx={SubmitButton} type='submit' variant='contained'>
						Fortsätt
					</Button>
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
	flexDirection: 'row',
	justifyContent: 'center',
};

const ButtonDiv: CSSProperties = {
	display: 'flex',
	justifyContent: 'right',
};

const SubmitButton: CSSProperties = {
	backgroundColor: '#BFD8D5',
	color: '#333333',
	marginTop: '2rem',
	padding: '0.5rem',
	width: '8rem',
	boxShadow: 'none',
	textDecoration: 'none',
};

export default UserInputForm;

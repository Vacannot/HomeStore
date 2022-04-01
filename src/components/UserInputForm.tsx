import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useOrderContext } from "../context/OrderContext";
import Grid from '@mui/material/Grid';

interface UserInputFormValues {
  firstName: string;
  lastName: string;
  email: string;
  number: number;
  adress: string;
  zipcode: number;
  country: string;
  city: string;
}

const validationSchema = yup.object({
  firstName: yup.string().required("Ange ditt förnamn").min(2),
  lastName: yup.string().required("Ange ditt efternamn").min(2),
  email: yup
    .string()
    .email("Ange en giltig e-post")
    .required("Ange en giltig e-post"),
  number: yup.number().required("Ange ditt telefonnummer").min(10),
  address: yup.string().required("Ange din adress").min(8),
  zipcode: yup.number().required("Ange ditt postnummer").min(5),
  city: yup.string().required("Ange din stad").min(2),
  country: yup.string().required("Ange ditt land").min(2),
});

const UserInputForm = () => {
  const { createNewOrder } = useOrderContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: 0,
      address: "",
      zipcode: 0,
      city: "",
      country: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createNewOrder(values);
    },
  });

  return (
    <div style={formDiv}>
      <form onSubmit={formik.handleSubmit}>
        <div style={formDiv}>
          <Grid container columns={{ xs: 6, sm: 6, md: 12, lg: 12 }}>
                <Grid style={gridItem} item xs={12} md={6}>
              <TextField
              style={textFieldStyle}
              id="firstName"
              name="firstName"
              label="Förnamn"
              inputProps={{ maxLength: 20 }}
              fullWidth
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
              </Grid>
              <Grid style={gridItem} item xs={12} md={6}>
            <TextField
              style={textFieldStyle}
              id="lastName"
              name="lastName"
              label="Efternamn"
              inputProps={{ maxLength: 20 }}             
              fullWidth
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
              </Grid>
              <Grid style={gridItem} item xs={12} md={6}>
            <TextField
              style={textFieldStyle}
              id="email"
              name="email"
              label="E-post"
              inputProps={{ maxLength: 50 }}            
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            </Grid>
            <Grid style={gridItem} item xs={12} md={6}>
            <TextField
              style={textFieldStyle}
              type="tel"
              id="number"
              name="number"
              label="Telefonnummer"
              inputProps={{ maxLength: 10, minLength: 10 }}
              
              fullWidth
              value={formik.values.number}
              onChange={formik.handleChange}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />
            </Grid>
            <Grid style={gridItem} item xs={12} md={6}>
            <TextField
              style={textFieldStyle}
              id="address"
              name="address"
              label="Adress"
              inputProps={{ maxLength: 20 }}            
              fullWidth
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            </Grid>
            <Grid style={gridItem} item xs={12} md={6}>
            <TextField
              style={textFieldStyle}
              type="tel"
              id="zipcode"
              name="zipcode"
              label="Postnummer"
              inputProps={{ maxLength: 5, minLength: 5 }}             
              fullWidth
              value={formik.values.zipcode}
              onChange={formik.handleChange}
              error={formik.touched.zipcode && Boolean(formik.errors.zipcode)}
              helperText={formik.touched.zipcode && formik.errors.zipcode}
            />
            </Grid>
            <Grid style={gridItem} item xs={12} md={6}>
            <TextField
              style={textFieldStyle}
              id="city"
              name="city"
              label="Stad"
              fullWidth
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
            </Grid>
            <Grid style={gridItem} item xs={12} md={6}>
            <TextField
              style={textFieldStyle}
              id="country"
              name="country"
              label="Land"
              fullWidth
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />
            </Grid>
				  </Grid>
            
        </div>
        <div style={ButtonDiv}>
          <Button sx={SubmitButton} type="submit" variant="contained">
            Fortsätt
          </Button>
        </div>
      </form>
    </div>
  );
};

const textFieldStyle: CSSProperties = {
  margin: "1rem",
  display: "flex",
  width: "35vw",
  minWidth: "250px",
};

const formDiv: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const ButtonDiv: CSSProperties = {
  display: "flex",
  justifyContent: "end",
};

const SubmitButton: CSSProperties = {
  backgroundColor: "#BFD8D5",
  color: "#333333",
  marginTop: "2rem",
  padding: "0.5rem",
  width: "8rem",
  boxShadow: "none",
  textDecoration: "none",
};

const gridItem: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
};


export default UserInputForm;

import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// interface Values {
// firstName: string;
// lastName: string;
// email: string;
// number: string;
// adress: string;
// }

const validationSchema = yup.object({
  firstnName: yup.string().required("Please enter first name").min(2),
  lastName: yup.string().required("Please enter last name").min(2),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  number: yup.string().required("Please enter number").min(10),
  address: yup.string().required("Enter your adress").min(8),
});

const UserInputForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert('hi');

    },
  });

  return (
    <div style={formDiv}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <Typography variant="subtitle1" style={header}>Mina uppgifter</Typography>
          <TextField
            style={textFieldStyle}
            id="firstName"
            name="firstName"
            label="Förnamn"
            fullWidth
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            style={textFieldStyle}
            id="lastName"
            name="lastName"
            label="Efternamn"
            fullWidth
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            style={textFieldStyle}
            id="email"
            name="email"
            label="E-post"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            style={textFieldStyle}
            id="number"
            name="number"
            label="Telefonnummer"
            fullWidth
            value={formik.values.number}
            onChange={formik.handleChange}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
          />
          <TextField
            style={textFieldStyle}
            id="address"
            name="address"
            label="Adress"
            fullWidth
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
        </div>
        <div style={buttonDiv}>
          <Button style={ButtonStyle} variant="contained" type="submit">
            Gå vidare
          </Button>
        </div>
      </form>
    </div>
  );
};

const textFieldStyle: CSSProperties = {
  margin: "1rem",
  display: "flex",
  width: "40ch",
};

const buttonDiv: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  paddingTop: "1rem",
};

const header: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const formDiv: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const ButtonStyle: CSSProperties = {
  backgroundColor: "#BFD8D5",
  margin: ".5rem",
  padding: ".5rem",
  width: "8rem",
  boxShadow: "none",
  textDecoration: "none",
};

export default UserInputForm;

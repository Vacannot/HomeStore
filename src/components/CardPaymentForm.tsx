import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Grid from '@mui/material/Grid';

const validationSchema = yup.object({
  cardNumber: yup
  .number()
  .required("Ange ett giltigt kort, minst 16 siffror")
  .min(16),
cvc: yup
.number()
.typeError("Ange ett giltigt CVC")
.required("Ange ett giltigt CVC")
.min(3),
cardHolder: yup
  .string()
  .typeError("Inget namn")
  .matches(/([a-ö\s]+$)/, "No numbers allowed")
  .required("Ange kortinnehavarens namn")
  .min(25),
cardMonth: yup
  .string()
  .typeError("Inte ett giltigt utgångsdatum. Exempel: MM")
  .max(2, "Inte ett giltigt utgångsdatum. Exempel: MM")
  .matches(/([0-9]{2})/, "Inte ett giltigt utgångsdatum. Exempel: MM")
  .required("Ange utgångsdatum")
  .min(2),
cardYear: yup
  .string()
  .typeError("Inte ett giltigt utgångsdatum. Exempel: YY")
  .max(4, "Inte ett giltigt utgångsdatum. Exempel: YY")
  .matches(/([0-9]{2})/, "Inte ett giltigt utgångsdatum. Exempel: YY")
  .required("Ange utgångsdatum"),
});

const CardPaymentForm = () => {
  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      cardHolder: "",
      cardMonth: "",
      cardYear: "",
      cvc: "",
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
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <Grid container columns={{ xs: 6, sm: 6, md: 12, lg: 12 }}>
              <Grid style={gridItem} item xs={12} md={6}>
                <TextField
                  style={textFieldStyle}
                  type="text"
                  id="cardHolder"
                  name="cardHolder"
                  label="Card Holder Name"
                  inputProps={{ maxLength: 25 }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  fullWidth
                  value={formik.values.cardHolder}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.cardHolder && Boolean(formik.errors.cardHolder)
                  }
                  helperText={
                    formik.touched.cardHolder && formik.errors.cardHolder
                  }
                />
              </Grid>
              <Grid style={gridItem} item xs={12} md={6}>
                <TextField
                  style={textFieldStyle}
                  type="number"
                  id="cardNumber"
                  name="cardNumber"
                  label="Card Number"
                  inputProps={{ maxLength: 16 }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  fullWidth
                  value={formik.values.cardNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.cardNumber && Boolean(formik.errors.cardNumber)
                  }
                  helperText={
                    formik.touched.cardNumber && formik.errors.cardNumber
                  }
                />
              </Grid>
              <Grid style={gridItem} item xs={12} md={6}>
                <TextField
                  style={textFieldStyleSmall}
                  type="number"
                  id="cardMonth"
                  name="cardMonth"
                  label="Card Month"
                  inputProps={{ maxLength: 2 }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  fullWidth
                  value={formik.values.cardMonth}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.cardMonth && Boolean(formik.errors.cardMonth)
                  }
                  helperText={formik.touched.cardMonth && formik.errors.cardMonth}
                />
              </Grid>
              <Grid style={gridItem} item xs={12} md={6}>
                <TextField
                  style={textFieldStyleSmall}
                  type="number"
                  id="cardYear"
                  name="cardYear"
                  label="Card Year"
                  fullWidth
                  value={formik.values.cardYear}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.cardYear && Boolean(formik.errors.cardYear)
                  }
                  helperText={formik.touched.cardYear && formik.errors.cardYear}
                />
              </Grid>
              <Grid style={gridItem} item xs={12} md={6}>
                <TextField
                  style={textFieldStyleSmall}
                  type="number"
                  id="cvc"
                  name="cvc"
                  label="Cvc Code"
                  fullWidth
                  value={formik.values.cvc}
                  onChange={formik.handleChange}
                  error={formik.touched.cvc && Boolean(formik.errors.cvc)}
                  helperText={formik.touched.cvc && formik.errors.cvc}
                />
              </Grid>
          </Grid>
          </div>
        </div>
      </form>
    </div>
  );
};

const textFieldStyle: CSSProperties = {
  margin: "1rem",
  display: "flex",
  width: "20vw",
  minWidth: "250px",
};

const textFieldStyleSmall: CSSProperties = {
  margin: "1rem",
  display: "flex",
  width: "20vw",
  minWidth: "250px",
};

const formDiv: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const gridItem: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
};

export default CardPaymentForm;

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

const validationSchema = yup.object({
  cardNumber: yup
    .number()
    .required("Enter a valid card, no less than 16 digits")
    .min(16),
  cvc: yup.number().required("Enter a valid CVC").min(3),
  cardHolder: yup
    .string()
    .typeError("Not a name")
    .matches(/([a-ö\s]+$)/, "No numbers allowed")
    .required("Enter the card holders name")
    .min(25),
  cardMonth: yup
    .string()
    .typeError("Not a valid expiration date. Example: MM")
    .max(2, "Not a valid expiration date. Example: MM")
    .matches(/([0-9]{2})/, "Not a valid expiration date. Example: MM")
    .required("Expiration date is required")
    .min(2),
  cardYear: yup
    .string()
    .typeError("Not a valid expiration date. Example: YY")
    .max(4, "Not a valid expiration date. Example: YY")
    .matches(/([0-9]{2})/, "Not a valid expiration date. Example: YY")
    .required("Expiration date is required"),
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TextField
                style={textFieldStyle}
                type="number"
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
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
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
            </div>
          </div>
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

const textFieldStyleSmall: CSSProperties = {
  margin: "1rem",
  display: "flex",
  width: "20ch",
};

const formDiv: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

export default CardPaymentForm;

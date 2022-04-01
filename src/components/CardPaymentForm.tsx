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
                type="text"
                id="cardHolder"
                name="cardHolder"
                label="Kort innehavarens namn"
                inputProps={{ maxLength: 25 }}
            
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
                type="tel"
                id="cardNumber"
                name="cardNumber"
                label="Kortnummer"
                inputProps={{ maxLength: 16 }}
             
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
                type="tel"
                id="cardMonth"
                name="cardMonth"
                label="Kort månad"
                inputProps={{ maxLength: 2 }}
               
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
                type="tel"
                id="cardYear"
                name="cardYear"
                label="Kort år"
                inputProps={{ maxLength: 2 }}
             
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
                type="tel"
                id="cvc"
                name="cvc"
                label="Cvc kod"
                inputProps={{ maxLength: 3 }}
              
                fullWidth
                value={formik.values.cvc}
                onChange={formik.handleChange}
                error={formik.touched.cvc && Boolean(formik.errors.cvc)}
                helperText={formik.touched.cvc && formik.errors.cvc}
              />
            </div>
            <div style={buttonDiv}>
            <Button sx={SubmitButton} type="submit" variant="contained">
                Slutför
              </Button>
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

const SubmitButton: CSSProperties = {
  backgroundColor: "#BFD8D5",
  color: "#333333",
  marginTop: "1rem",
  padding: "0.5rem",
  width: "8rem",
  boxShadow: "none",
  textDecoration: "none",
 
}

const buttonDiv: CSSProperties = {
  display: "flex",
  justifyContent: "center",
}

export default CardPaymentForm;

import React, { CSSProperties } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";

const validationSchema = yup.object({
  cardNumber: yup
    .number()
    .required("Ange ett giltigt kort, minst 16 siffror")
    .min(16),
  cvc: yup.number().required("Ange ett giltigt CVC").min(3),
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
                label="Kortnummer"
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
                label="Kort månad"
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
                label="Kort år"
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
                label="Cvc kod"
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

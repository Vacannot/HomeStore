import React, { CSSProperties, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import { useOrderContext } from "../context/OrderContext";

const validationSchema = yup.object({
  swishNumber: yup.string().required("Ange telefonnummer").min(10),
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <TextField
            style={textFieldStyle}
            id="swishNumber"
            name="swishNumber"
            label="Swish Nummer"
            inputProps={{ maxLength: 10, minLength: 10 }}
            fullWidth
            value={formik.values.swishNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.swishNumber && Boolean(formik.errors.swishNumber)
            }
            helperText={formik.touched.swishNumber && formik.errors.swishNumber}
          />
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

const formDiv: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

export default SwishPaymentForm;

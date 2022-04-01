import React, { CSSProperties, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useOrderContext } from "../context/OrderContext";

const validationSchema = yup.object({
  swishNumber: yup.string().required("Ange ditt nummer").min(10),
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

  //   // useEffect(() => {
  // /*   //   // console.log( */order)
  //   // }, [order])

  return (
    <div style={formDiv}>
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography sx={{ display: "flex", justifyContent: "start" }}>
            Swish Number
          </Typography>
          <TextField
            style={textFieldStyle}
            id="swishNumber"
            name="swishNumber"
            label="Swish Nummer"
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
  width: "40ch",
};

const formDiv: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

export default SwishPaymentForm;

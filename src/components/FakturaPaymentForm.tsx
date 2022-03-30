import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const FakturaPaymentForm = () => {
  return (
    <div style={formDiv}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography sx={{ display: "flex", justifyContent: "start" }}>
          Faktura kommer att skickas till din adress
        </Typography>
      </div>
    </div>
  );
};

const formDiv: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

export default FakturaPaymentForm;

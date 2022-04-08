import React, { useState } from "react";
import Box from "@mui/material/Box";
import { CSSProperties } from "@mui/styled-engine";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";
import CardPaymentForm from "./CardPaymentForm";
import SwishPaymentForm from "./SwishPaymentForm";
import FakturaPaymentForm from "./FakturaPaymentForm";
import { useOrderContext } from "../context/OrderContext";

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

interface Props {
  setShipping;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();
  let checked = false;
  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }
  return <StyledFormControlLabel checked={checked} {...props} />;
}

export default function PaymentOptionsForm(props) {
  const { setPaymentMethod } = useOrderContext();
  const [paymentOptionState, setPaymentOptionState] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentOptionState(event.target.value);
    setPaymentMethod(event.target.value);
    props.setShippingDisabled(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <RadioGroup
            name="use-radio-group"
            defaultValue="none"
            onChange={handleChange}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box style={{ display: "flex", flexDirection: "row" }}>
                <MyFormControlLabel value="card" label="" control={<Radio />} />
                <Paper sx={paymentOptionButton}>
                  <h4 style={{ margin: "0", marginBottom: "10px" }}>
                    Kortbetalning
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h4 style={{ margin: "0" }}>Visa, MasterCard, etc.</h4>
                  </div>
                </Paper>
              </Box>
              {paymentOptionState === "card" && <CardPaymentForm />}

              <Box style={{ display: "flex", flexDirection: "row" }}>
                <MyFormControlLabel
                  value="swish"
                  label=""
                  control={<Radio />}
                />
                <Paper sx={paymentOptionButton}>
                  <h4 style={{ margin: "0" }}>Swish</h4>
                  <div
                    style={{ display: "flex", flexDirection: "column" }}
                  ></div>
                </Paper>
              </Box>
              {paymentOptionState === "swish" && <SwishPaymentForm />}

              <Box style={{ display: "flex", flexDirection: "row" }}>
                <MyFormControlLabel
                  value="faktura"
                  label=""
                  control={<Radio />}
                />
                <Paper sx={paymentOptionButton}>
                  <h4 style={{ margin: "0" }}>
                    Betala med Faktura{" "}
                    <span style={{ fontSize: "13px", color: "grey" }}>
                      Skickas till angiven adress
                    </span>
                  </h4>
                  <div
                    style={{ display: "flex", flexDirection: "column" }}
                  ></div>
                </Paper>
              </Box>
              {paymentOptionState === "faktura" && <FakturaPaymentForm />}
            </div>
          </RadioGroup>
        </div>
      </div>
    </Box>
  );
}

const ButtonStyle: CSSProperties = {
  backgroundColor: "#BFD8D5",
  color: "#333333",
  marginTop: "2rem",
  padding: "0.5rem",
  width: "8rem",
  boxShadow: "none",
  textDecoration: "none",
};

const paymentOptionButton: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#F4F3F3",
  padding: "1rem",
  justifyContent: "space-between",
  color: "#333333",
  marginTop: "1rem",
  width: "25vw",
  minWidth: "200px",
};

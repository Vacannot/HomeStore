import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import UserInputForm from "./UserInputForm";
import ShippingForm from "./ShippingForm";
import PaymentOptionsForm from "./PaymentOptionsForm";
import { OrderOverview } from "./OrderOverview";
import { useOrderContext } from "../context/OrderContext";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={6} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CheckoutAccordion() {
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const [isFormNotSubmitted, setIsFormNotSubmitted] = useState(true);
  const [isShippingDisabled, setIsShippingDisabled] = useState(true);
  const [isOrderInfoDisabled, setIsOrderInfoDisabled] = useState(true);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "start" }}
          >
            Mina uppgifter
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <UserInputForm setForm={setIsFormNotSubmitted} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        disabled={isFormNotSubmitted}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "start" }}
          >
            Betalningsalternativ
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PaymentOptionsForm setShippingDisabled={setIsShippingDisabled} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        disabled={isShippingDisabled}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "start" }}
          >
            Fraktalternativ
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ShippingForm setOrderInfoDisabled={setIsOrderInfoDisabled} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        disabled={isOrderInfoDisabled}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "start" }}
          >
            Beställningsöverblick
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <OrderOverview />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

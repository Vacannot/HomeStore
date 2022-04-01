import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import CartPage from './../pages/cartPage';
import UserInputForm from './UserInputForm';
import ShippingForm from './ShippingForm';
import PaymentOptionsForm from './PaymentOptionsForm';
import ShippingDetailsForm from './ShippingDetailsForm';
import { OrderOverview } from './OrderOverview';

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
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
					<Typography variant="h5" sx={{ display: 'flex', justifyContent: 'start' }}>
						Mina uppgifter
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
				
						<UserInputForm />
		
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
					<Typography variant="h5" sx={{ display: 'flex', justifyContent: 'start' }}>
						Betalningsalternativ
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					
						<PaymentOptionsForm />
					
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
				<AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
					<Typography variant="h5" sx={{ display: 'flex', justifyContent: 'start' }}>
						Fraktalternativ
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
				
						<ShippingForm />
					
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
				<AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
					<Typography variant="h5" sx={{ display: 'flex', justifyContent: 'start' }}>
						Beställningsöverblick
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
				
						{/* <ShippingDetailsForm /> */}
						<OrderOverview />
						
					
				</AccordionDetails>
			</Accordion>
		</div>
		
	);
}

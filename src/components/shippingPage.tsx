import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CSSProperties } from "@mui/styled-engine";
import { TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function FormPage() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center" }}
      component="form"
      autoComplete="on"
    >
      <form>
        <h1>SHIPPING OPTIONS</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
          <h1>SHIPPING OPTIONS</h1>
          </Typography>

          <div style={{ backgroundColor: "#F4F3F3", borderRadius:"0.5rem", padding:"1rem" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
              <div>
                  <h4>Shipping Adress</h4>
              </div>
              <div>
                <Button sx={ButtonStyleSmall} variant="contained">
                  Edit
                </Button>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>Namn</div> {/* Import from previous page */}
              <div>Efternamn</div> {/* Import from previous page */}
              <div>Mail</div> {/* Import from previous page */}
              <div>Telefonnummer</div> {/* Import from previous page */}
              <div>Adress</div> {/* Import from previous page */}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
            <h4>FRAKTSÄTT</h4>
            <LocalShippingIcon />
          </div>

          <Button sx={shippingButton} variant="contained">
            <h4 style={{margin: "0"}}>Express 24h</h4>
            <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style= {{margin: "0"}}>DHL</h4>
            <div>Price: 149kr</div>
            </div>
          </Button>

          <Button sx={shippingButton} variant="contained">
            <h4 style={{margin: "0"}}>Standard 48h</h4>
            <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style= {{margin: "0"}}>Postnord</h4>
            <div>Price: 59kr</div>
            </div>
          </Button>

          <Button sx={shippingButton} variant="contained">
          <div style={{ display: "flex", flexDirection: "column"}}>
            <h4 style={{margin: "0"}}>Click and Collect</h4>
            <div>3-5 arbetsdagar</div>
          </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style= {{margin: "0"}}>Instabox</h4>
            <div>Price: 0kr</div>
            </div>
          </Button>



          <div
            style={{ display: "flex", justifyContent: "center", gap: "2rem" }}
          >
            <Link to="/formpage">
            <Button sx={ButtonStyle} variant="contained">
              Föregående
            </Button>
            </Link>

            <Link to="/paymentpage">
            <Button sx={ButtonStyle} variant="contained">
              Gå vidare
            </Button>
            </Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={() => console.log("du gick vidare")}
              sx={cancelButton}
              variant="outlined"
            >
              Avbryt köp
            </Button>
          </div> 
        </div>
      </form>
    </Box>
  );
}

const ButtonStyle: CSSProperties = {
  backgroundColor: "#BFD8D5",
  marginTop: "2rem",
  padding: "0.5rem",
  width: "8rem",
  boxShadow: "none",
  textDecoration: "none",
};

const ButtonStyleSmall: CSSProperties = {
  backgroundColor: "#BFD8D5",
  padding: "0.5rem",
  width: "4rem",
  boxShadow: "none",
  textDecoration: "none",
  color: "black",
}

const shippingButton: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#F4F3F3",
  padding: "1rem",
  justifyContent: "space-between",
  color: "black",
  marginTop: "1rem",
}

const cancelButton: CSSProperties = {
  marginTop: "2rem",
  color: "black",
  borderColor: "black",
  padding: "0.5rem",
  width: "8rem",
  textDecoration: "none",
};

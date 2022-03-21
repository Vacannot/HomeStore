import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CSSProperties } from "@mui/styled-engine";
import { TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function FormPage() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center" }}
      component="form"
      autoComplete="on"
    >
      <form>
      <h1>MINA UPPGIFTER</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            <h1>MINA UPPGIFTER</h1>
          </Typography>

          <TextField
            sx={{ marginTop: "1rem", width: "40ch" }}
            required
            id="outlined-required"
            type="name"
            label="Förnamn"
            placeholder="Förnamn"
          />
          <TextField
            sx={{ marginTop: "1rem", width: "40ch" }}
            required
            id="outlined-required"
            type="name"
            label="Efternamn"
            placeholder="Efternamn"
          />
          <TextField
            sx={{ marginTop: "1rem", width: "40ch" }}
            required
            id="outlined-required"
            type="adress"
            label="Adress"
            placeholder="Adress"
          />
          <TextField
            sx={{ marginTop: "1rem", width: "40ch" }}
            required
            id="outlined-number"
            type="number "
            label="Telefon"
            placeholder="Telefon"
          />
          <TextField
            sx={{ marginTop: "1rem", width: "40ch" }}
            required
            id="outlined-required"
            type="city"
            label="Ort"
            placeholder="Ort"
          />
          <TextField
            sx={{ marginTop: "1rem", width: "40ch" }}
            required
            id="outlined-required"
            type="postcode"
            label="Postnummer"
            placeholder="Postnummer"
          />

          <div
            style={{ display: "flex", justifyContent: "center", gap: "2rem" }}
          >
            <Link to="/cartpage">
            <Button sx={ButtonStyle} variant="contained">
              Föregående
            </Button>
            </Link>
            <Link to="/shippingpage">
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
};

const cancelButton: CSSProperties = {
  marginTop: "2rem",
  color: "black",
  borderColor: "black",
  padding: "0.5rem",
  width: "8rem",
};

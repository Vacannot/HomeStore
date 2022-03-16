import React, { CSSProperties } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/system";
import Search from "./Search";
import Logo from "./Logo";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const theme = createTheme({
  palette: {
    background: "#BFD8D5",
  },
});

function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar variant="regular" sx={toolbarStyle}>
          <Link to="/">
            <Logo />
          </Link>
          <Search />
          <div style={iconsDivStyle}>
            <FavoriteIcon />
            <Link to="/cartpage">
              <ShoppingCartIcon />
            </Link>
            <Menu />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

const iconsDivStyle: CSSProperties = {
  display: "flex",
  width: "6rem",
  justifyContent: "space-between",
};

const toolbarStyle: CSSProperties = {
  display: "flex",
  padding: "0 2rem",
  justifyContent: "space-between",
  backgroundColor: "#BFD8D5",
};

export default Header;

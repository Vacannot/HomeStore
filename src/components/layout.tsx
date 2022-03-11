import React, { CSSProperties } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Menu from "./Menu";

function Layout() {
  return (
    <div style={rootStyle}>
      <Switch>
        <Menu></Menu>
      </Switch>
    </div>
  );
}

const rootStyle: CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

export default Layout;

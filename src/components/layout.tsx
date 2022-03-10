import React, { CSSProperties } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Banner from "./Banner";

function Layout() {
  return (
    <div style={rootStyle}>
      <Switch>
        <Banner></Banner>
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

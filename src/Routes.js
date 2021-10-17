import React from "react";
import { GlobalStyle } from "./styles/theme";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import Navigation from "./components/navigation/navigation";

import Home from "./Pages/home";
import Beerlist from "./Pages/beerlist";
// import ReactGA from "react-ga";

const Routes = () => {
  const theme = useSelector((state) => state.darkmode.darkmode);
  return (
    <div>
      <ThemeProvider theme={{ theme: theme }}>
        <GlobalStyle />
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route exact path="/beerlist" component={Beerlist} />
        </Switch>
      </ThemeProvider>
    </div>
  );
};

export default Routes;

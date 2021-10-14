import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navigation from "./components/navigation/navigation";

import Home from "./Pages/Home";
import Beerlist from "./Pages/Beerlist";
// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route exact path="/beerlist" component={Beerlist} />
      </Switch>
    </div>
  );
};

export default Routes;

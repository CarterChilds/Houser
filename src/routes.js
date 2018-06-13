import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Wizard1 from "./components/Wizard/Wizard1";
import Wizard2 from "./components/Wizard/Wizard2";
import Wizard3 from "./components/Wizard/Wizard3";
import Wizard4 from "./components/Wizard/Wizard4";
import Wizard5 from "./components/Wizard/Wizard5";

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/Dashboard" component={Dashboard} />
    <Route path="/Wizard1" component={Wizard1} />
    <Route path="/Wizard2" component={Wizard2} />
    <Route path="/Wizard3" component={Wizard3} />
    <Route path="/Wizard4" component={Wizard4} />
    <Route path="/Wizard5" component={Wizard5} />
  </Switch>
);

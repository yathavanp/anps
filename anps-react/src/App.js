import React from "react";
import HomeComponent from "./Home";
import contact from "./contact";
import portfolio from "./portfolio";
import { Switch, Route } from "react-router";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/home" component={HomeComponent} />
      <Route path="/anps" component={HomeComponent} />
      <Route path="/portfolio" component={portfolio} />
      <Route path="/contact" component={contact} />
    </Switch>
  );
}

export default App;

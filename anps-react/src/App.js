import React from "react";
import HomeComponent from "./Home";
import { Switch, Route } from "react-router";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/home" component={HomeComponent} />
      <Route path="/anps" component={HomeComponent} />
    </Switch>
  );
}

export default App;

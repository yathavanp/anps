import React from "react";
import HomeComponent from "./Home";
import contact from "./contact";
import portfolio from "./portfolio";
import { Switch, Route } from "react-router";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/portfolio" component={portfolio} />
      <Route exact path="/contact" component={contact} />
    </div>
    
  );
}

export default App;

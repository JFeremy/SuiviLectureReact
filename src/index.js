// PROJET DE SUIVI DE LECTURE
// REACT
import React from "react";
import { render } from "react-dom";
//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//CSS
import "./index.css";
// COMPONENTS
import App from "./Components/App";
import Connexion from "./Components/Connexion";
import NotFound from "./Components/NotFound";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Connexion} />
        <Route path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

render(<Root />, document.getElementById("root"));

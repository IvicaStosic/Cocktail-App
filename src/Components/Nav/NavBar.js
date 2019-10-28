import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import About from "../About/About";
import HomePage from "../HomePage/HomePage";
import RandomCocktail from "../RandomCocktail/RandomCocktail";
import AllCocktails from "../AllCocktails/AllCocktails";

function NavBar() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/About" component={About} />
        <Route path="/" exact component={HomePage} />
        <Route path="/all" exact component={AllCocktails} />
        <Route path="/random" exact component={RandomCocktail} />
      </Switch>
    </Router>
  );
}

export default NavBar;

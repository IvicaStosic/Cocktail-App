import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import About from "../About/About";
import HomePage from "../HomePage/HomePage";
import RandomCocktail from "../RandomCocktail/RandomCocktail";
import AllCocktails from "../AllCocktails/AllCocktails";
import FetchByType from "../AllCocktails/FetchByType";
import FetchByGlass from "../AllCocktails/FetchByGlass";
import FetchById from "../AllCocktails/FetchById";
import FetchByIngredient from "../AllCocktails/FetchByIngredient";

function NavBar() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/About" component={About} />
        <Route path="/" exact component={HomePage} />
        <Route path="/all" exact component={AllCocktails} />
        <Route path="/all/3/:glass" exact component={FetchByGlass} />
        <Route path="/all/2/:type" exact component={FetchByType} />
        <Route path="/all/1/:id" exact component={FetchById} />
        <Route path="/all/ing/:ing" exact component={FetchByIngredient} />
        <Route path="/random" exact component={RandomCocktail} />
      </Switch>
    </Router>
  );
}

export default NavBar;

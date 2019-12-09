import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import About from "../About/About";
import HomePage from "../HomePage/HomePage";
import RandomCocktail from "../RandomCocktail/RandomCocktail";
import AllCocktails from "../AllCocktails/AllCocktails";
import FetchByType from "../AllCocktails/FetchByType";
import FetchByGlass from "../AllCocktails/FetchByGlass";
import FetchByIngredient from "../AllCocktails/FetchByIngredient";
import Search from "../Search/Search";
import SearchByName from "../Search/SearchByName";
import SearchByIng from "../Search/SearchByIng";
import SearchByGlass from "../Search/SearchByGlass";

function NavBar() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/About" component={About} />
        <Route path="/" exact component={HomePage} />
        <Route path="/all" exact component={AllCocktails} />
        <Route path="/all/glass/:glass" exact component={FetchByGlass} />
        <Route path="/all/type/:type" exact component={FetchByType} />
        <Route path="/all/ing/:ing" exact component={FetchByIngredient} />
        <Route path="/random" exact component={RandomCocktail} />
        <Route path="/search" exact component={Search} />
        <Route path="/search/s_name/:name" exact component={SearchByName} />
        <Route path="/search/s_ing/:ing" exact component={SearchByIng} />
        <Route path="/search/s_glass/:glass" exact component={SearchByGlass} />
      </Switch>
    </Router>
  );
}

export default NavBar;

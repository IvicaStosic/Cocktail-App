import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import HomePageNameMenu from "./HomePageNameMenu";
import HomePageIngredientMenu from "./HomePageIngredientMenu";
import HomePageGlassTypeMenu from "./HomePageGlassTypeMenu";

const HomePage = () => {
  return (
    <div className="homePage">
      <h1>
        Welcome to Cocktail App where you can search for and see information
        about your favorite drinks whether they are{" "}
        <Link to="/all/type/Alcoholic" className="homeLinks">
          alcoholic
        </Link>{" "}
        or{" "}
        <Link to="/all/type/Non%20alcoholic" className="homeLinks">
          non-alcoholic
        </Link>
        .
      </h1>

      <h3>
        If you are interested in trying something new you can check{" "}
        <Link to="/all" className="homeLinks">
          A-Z Cocktails
        </Link>{" "}
        page for whide selection organized by name.
      </h3>

      <h3>
        Or... you can always let yourself be surprised by going for{" "}
        <Link to="/random" className="homeLinks">
          Random Cocktail
        </Link>
        .
      </h3>

      <h3>
        If you have some specific drink in mind, fill free to search for it by
        writing it's name, ingredient or even type of glass it is served in.
      </h3>

      <div className="menuList">
        <HomePageNameMenu />
        <HomePageIngredientMenu />
        <HomePageGlassTypeMenu />
      </div>

      <h5>
        For information about this app please visit{" "}
        <Link to="/about" className="homeLinks">
          About
        </Link>{" "}
        page.
      </h5>
      <form action=""></form>
    </div>
  );
};

export default HomePage;

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage">
      <h1>
        Welcome to the Cocktail App where you can search for and see information
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
        If you are interested in trying something new you can check out the{" "}
        <Link to="/all" className="homeLinks">
          A-Z Cocktails
        </Link>{" "}
        page for whide selection organized by name.
      </h3>

      <h3>
        Or... you can always let yourself be surprised by going for a{" "}
        <Link to="/random" className="homeLinks">
          Random Cocktail
        </Link>
        .
      </h3>

      <h3>
        If you have some specific drink in mind, fill free to search for it by
        writing it's{" "}
        <Link to={`/search/s_name/name`} className="homeLinks">
          name
        </Link>
        ,{" "}
        <Link to={`/search/s_ing/ing`} className="homeLinks">
          ingredient
        </Link>{" "}
        or even type of{" "}
        <Link to={`/search/s_glass/glass`} className="homeLinks">
          glass
        </Link>{" "}
        it is served in.
      </h3>

      <h5>
        For information on this app please visit{" "}
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

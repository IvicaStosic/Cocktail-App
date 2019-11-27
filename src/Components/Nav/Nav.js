import React from "react";
import { Link } from "react-router-dom";

import "../../styles/style.css";

function Nav() {
  return (
    <div>
      <ul className="navLinks">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/all">
          <li>All Cocktails</li>
        </Link>
        <Link to="/random">
          <li>Random Cocktail</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;

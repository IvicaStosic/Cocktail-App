import React from "react";
import { Link } from "react-router-dom";

import "../../styles/style.css";

function Nav() {
  return (
    <div>
      <ul className="navLinks">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/all" className="link">
          <li>A-Z Cocktails</li>
        </Link>
        <Link to="/random" className="link">
          <li>Random Cocktail</li>
        </Link>
        <Link to="/search" className="link">
          <li>Search By</li>
        </Link>
        <Link to="/about" className="link">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;

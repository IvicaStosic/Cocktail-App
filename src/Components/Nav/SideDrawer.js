import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/style.css";

const SideDrawer = ({ clicked }) => {
  return (
    <div>
      {clicked ? (
        <div className="sideDrawer">
          <ul className="sideDrawerNavLinks">
            <Link to="/" className="sideDrawerLink">
              <li>Home</li>
            </Link>
            <Link to="/all" className="sideDrawerLink">
              <li>A-Z Cocktails</li>
            </Link>
            <Link to="/random" className="sideDrawerLink">
              <li>Random Cocktail</li>
            </Link>
            <Link to="/search" className="sideDrawerLink">
              <li>Search By</li>
            </Link>
            <Link to="/about" className="sideDrawerLink">
              <li>About</li>
            </Link>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default SideDrawer;

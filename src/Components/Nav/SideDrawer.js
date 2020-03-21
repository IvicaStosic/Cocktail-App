import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/style.css";
import DrawerToggleButton from "./DrawerToggleButton";

const SideDrawer = ({ clicked }) => {
  return (
    <div>
      {clicked ? (
        <div className="sideDrawer">
          <ul className="sideDrawerNavLinks">
            <Link to="/" className="sideDrawerLink">
              <li onClick={clicked}>Home</li>
            </Link>
            <Link to="/all" className="sideDrawerLink">
              <li onClick={clicked}>A-Z Cocktails</li>
            </Link>
            <Link to="/random" className="sideDrawerLink">
              <li onClick={clicked}>Random Cocktail</li>
            </Link>
            <Link to="/search" className="sideDrawerLink">
              <li onClick={clicked}>Search By</li>
            </Link>
            <Link to="/about" className="sideDrawerLink">
              <li onClick={clicked}>About</li>
            </Link>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default SideDrawer;

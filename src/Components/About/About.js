import React from "react";

import "../../styles/style.css";

function About() {
  return (
    <div className="about">
      <h1>Hi</h1>
      <p>
        A-Z Cocktails uses React context to fetch by letter, for every drink
        detail.
      </p>
      <p>
        Every other specific search or random cocktail choice makes a separate
        fetch request to api.
      </p>
      <p>Api used to get all data is https://www.thecocktaildb.com/.</p>
      <h3>Curent tasks</h3>
      <ul>
        <li>Make different layouts for different screen resolutions</li>
        <li>Fix "missing dependency" in various components</li>
      </ul>
      <p>Ivica</p>
    </div>
  );
}

export default About;

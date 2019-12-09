import React from "react";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <Link to={`/search/s_name/name`}>
        <h1>Search by cocktail name</h1>
      </Link>
      <Link to={`/search/s_ing/ing`}>
        <h1>Search by ing name</h1>
      </Link>
      <Link to={`/search/s_glass/glass`}>
        <h1>Search by glass type</h1>
      </Link>
    </div>
  );
};

export default Search;

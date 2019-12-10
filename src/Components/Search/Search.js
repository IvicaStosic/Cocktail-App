import React from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";

const Search = () => {
  return (
    <div className="search">
      <Link to={`/search/s_name/name`} className="searchLink">
        <h1 className="searchChoiceLink">Search by cocktail name</h1>
      </Link>
      <Link to={`/search/s_ing/ing`} className="searchLink">
        <h1 className="searchChoiceLink">Search by ingredient name</h1>
      </Link>
      <Link to={`/search/s_glass/glass`} className="searchLink">
        <h1 className="searchChoiceLink">Search by glass type</h1>
      </Link>
    </div>
  );
};

export default Search;

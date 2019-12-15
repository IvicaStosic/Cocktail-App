import React, { useState, useEffect } from "react";

import FetchByIds from "../AllCocktails/FetchByIds";
import ToTopButton from "../Nav/ToTopButton";

import "../../styles/style.css";

const SearchByIng = () => {
  const [ing, setIng] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    FetchByIng();
  }, [query]);

  const FetchByIng = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`
    );
    console.log(query);
    const data = await response.json();
    setIng(data.drinks);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="searchChoice">
      <form onSubmit={getSearch} className="searchForm">
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit">Search by ingredient name</button>
      </form>

      <div>
        <h1>{query}</h1>
      </div>

      <div className="searchResult">
        {ing ? (
          ing.map(drink => (
            <div key={drink.idDrink}>
              <FetchByIds id={drink.idDrink} />
            </div>
          ))
        ) : (
          <h1>No results yet, type something</h1>
        )}
      </div>
      <ToTopButton />
    </div>
  );
};

export default SearchByIng;

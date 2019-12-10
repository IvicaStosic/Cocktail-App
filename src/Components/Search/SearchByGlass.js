import React, { useState, useEffect } from "react";

import FetchByIds from "../AllCocktails/FetchByIds";
import ToTopButton from "../Nav/ToTopButton";

import "../../styles/style.css";

const SearchByGlass = () => {
  const [glass, setGlass] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    FetchByGlassList();
  }, [query]);

  const FetchByGlassList = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${query}`
    );

    let data = response.json();
    console.log(data);
    setGlass(data.drinks);
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
        <button type="submit">Search by glass type</button>
      </form>

      <div className="searchResult">
        {glass ? (
          glass.map(drink => (
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

export default SearchByGlass;

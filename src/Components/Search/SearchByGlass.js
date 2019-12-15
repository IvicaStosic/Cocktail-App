import React, { useState, useEffect } from "react";

import FetchByIds from "../AllCocktails/FetchByIds";
import ToTopButton from "../Nav/ToTopButton";

import "../../styles/style.css";

function useGlassDB(query) {
  const [glass, setGlass] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const FetchByGlassList = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${query}`
        );

        const data = await response.json();
        //console.log(data);
        setGlass(data.drinks);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    if (query !== "") {
      FetchByGlassList();
    }
  }, [query]);

  return [glass, loading];
}

const SearchByGlass = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [glass, loading] = useGlassDB(query);

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

      <div>
        <h1>{query}</h1>
      </div>

      <div className="searchResult">
        {loading ? (
          <h1>loading</h1>
        ) : (
          glass.map(drink => (
            <div key={drink.idDrink}>
              <FetchByIds id={drink.idDrink} />
            </div>
          ))
        )}
      </div>
      <ToTopButton />
    </div>
  );
};

export default SearchByGlass;

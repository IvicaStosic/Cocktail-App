import React, { useState, useEffect } from "react";

import FetchByIds from "../AllCocktails/FetchByIds";
import ToTopButton from "../Nav/ToTopButton";

import "../../styles/style.css";

function useIngDB(query) {
  const [ing, setIng] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const FetchByIngList = async () => {
      try {
        setLoading(true);

        let queryFix = query.charAt(0).toUpperCase() + query.slice(1);

        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${queryFix}`
        );

        const data = await response.json();

        setIng(data.drinks);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    if (query !== "") {
      FetchByIngList();
    }
  }, [query]);

  return [ing, loading];
}

const SearchByIng = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [ing, loading] = useIngDB(query);

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
        {loading ? (
          <h1>loading...</h1>
        ) : (
          ing.map(drink => (
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

export default SearchByIng;

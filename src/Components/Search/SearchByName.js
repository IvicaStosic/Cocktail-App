import React, { useState, useEffect } from "react";

import RenderOne from "../RenderOne/RenderOne";
import ToTopButton from "../Nav/ToTopButton";

import "../../styles/style.css";

const SearchByName = () => {
  const [name, setName] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("?");

  useEffect(() => {
    FetchByNameList();
  }, [query]);

  const FetchByNameList = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    setName(data.drinks);
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
        <button type="submit">Search by Cocktail name</button>
      </form>
      <div className="searchResult">
        {name ? (
          name.map(drink => (
            <div key={drink.idDrink}>
              <RenderOne
                key={drink.idDrink}
                id={drink.idDrink}
                name={drink.strDrink}
                type={drink.strAlcoholic}
                image={drink.strDrinkThumb}
                ing1={drink.strIngredient1}
                ing2={drink.strIngredient2}
                ing3={drink.strIngredient3}
                ing4={drink.strIngredient4}
                ing5={drink.strIngredient5}
                ing6={drink.strIngredient6}
                ing7={drink.strIngredient7}
                ing8={drink.strIngredient8}
                ing9={drink.strIngredient9}
                ing10={drink.strIngredient10}
                ing11={drink.strIngredient11}
                ing12={drink.strIngredient12}
                ing13={drink.strIngredient13}
                ing14={drink.strIngredient14}
                ing15={drink.strIngredient15}
                measure1={drink.strMeasure1}
                measure2={drink.strMeasure2}
                measure3={drink.strMeasure3}
                measure4={drink.strMeasure4}
                measure5={drink.strMeasure5}
                measure6={drink.strMeasure6}
                measure7={drink.strMeasure7}
                measure8={drink.strMeasure8}
                measure9={drink.strMeasure9}
                measure10={drink.strMeasure10}
                measure11={drink.strMeasure11}
                measure12={drink.strMeasure12}
                measure13={drink.strMeasure13}
                measure14={drink.strMeasure14}
                measure15={drink.strMeasure15}
                instructions={drink.strInstructions}
                glass={drink.strGlass}
              />
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

export default SearchByName;

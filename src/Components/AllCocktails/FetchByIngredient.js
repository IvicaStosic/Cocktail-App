import React, { useState, useEffect } from "react";
import FetchByIds from "./FetchByIds";
import "../../styles/style.css";
import ToTopButton from "../Nav/ToTopButton";
import { Link } from "react-router-dom";

const FetchByIngredient = ({ match }) => {
  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    FetchByIngredientList();
  }, []);

  const FetchByIngredientList = async () => {
    let ingredientChoice = match.params.ing.split(" ").join("_");

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientChoice}`
    );
    const data = await response.json();
    console.log(data);
    setIngredient(data.drinks);
  };

  return (
    <div className="renderFetchChoice">
      <div>
        <h1 className="fetchChoice">Cocktails with {match.params.ing}</h1>
      </div>
      <div className="fetchChoiceList">
        {ingredient.map(drink => (
          <div key={drink.idDrink}>
            <FetchByIds id={drink.idDrink} />
          </div>
        ))}
      </div>
      <Link to="/search/s_ing/ing">
        <h1>Search by some other ingredient</h1>
      </Link>
      <ToTopButton />
    </div>
  );
};

export default FetchByIngredient;

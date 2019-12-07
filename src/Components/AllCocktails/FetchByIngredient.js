import React, { useState, useEffect } from "react";
import RenderOne from "../RenderOne/RenderOne";
import "../../styles/style.css";
import ToTopButton from "../Nav/toTopButton";

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
        <h1 className="fetchChoice">{match.params.ing1}</h1>
      </div>
      <div className="fetchChoiceList">
        {ingredient.map(drink => (
          <div key={drink.idDrink}>
            <RenderOne
              id={drink.idDrink}
              name={drink.strDrink}
              type={drink.strAlcoholic}
              image={drink.strDrinkThumb}
            />
          </div>
        ))}
      </div>
      <ToTopButton />
    </div>
  );
};

export default FetchByIngredient;

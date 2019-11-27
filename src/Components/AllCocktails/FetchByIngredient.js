import React, { useState, useEffect } from "react";
import RenderOne from "../RenderOne/RenderOne";

const FetchByIngredient = ({ match }) => {
  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    FetchByIngredientList();
  }, []);

  const FetchByIngredientList = async () => {
    let ingredientChoice = match.params.ing1.split(" ").join("_");

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientChoice}`
    );
    const data = await response.json();
    console.log(data);
    setIngredient(data.drinks);
  };

  return (
    <div>
      {ingredient.map(drink => (
        <div>
          <RenderOne
            key={drink.idDrink}
            name={drink.strDrink}
            type={drink.strAlcoholic}
            image={drink.strDrinkThumb}
          />
        </div>
      ))}
    </div>
  );
};

export default FetchByIngredient;

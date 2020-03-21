import React, { useState, useEffect } from "react";

import RenderList from "../RenderOne/RenderList";

const FetchIngredientList = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    FetchIngredientsList();
  }, []);

  const FetchIngredientsList = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
    );
    const data = await response.json();
    setIngredients(data.drinks);
  };

  return (
    <div className="glassesList">
      {ingredients.map(ingredient => (
        <div key={ingredient.strIngredient1} className="glassesListSpecific">
          <RenderList name={ingredient.strIngredient1} />
        </div>
      ))}
    </div>
  );
};

export default FetchIngredientList;

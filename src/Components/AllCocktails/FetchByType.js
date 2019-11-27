import React, { useState, useEffect } from "react";
import RenderOne from "../RenderOne/RenderOne";

const FetchByType = ({ match }) => {
  const [type, setType] = useState([]);

  useEffect(() => {
    FetchByTypeList();
  }, []);

  const FetchByTypeList = async () => {
    const typeChoice = match.params.type.split(" ").join("_");
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${typeChoice}`
    );
    console.log("test glass");
    const data = await response.json();
    console.log(data);
    setType(data.drinks);
  };

  return (
    <div>
      {type.map(drink => (
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

export default FetchByType;

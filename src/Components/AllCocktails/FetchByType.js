import React, { useState, useEffect } from "react";
import RenderOne from "../RenderOne/RenderOne";
import ToTopButton from "../Nav/toTopButton";

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
    const data = await response.json();
    setType(data.drinks);
  };

  return (
    <div className="renderFetchChoice">
      <div>
        <h1 className="fetchChoice">{match.params.type}</h1>
      </div>
      <div className="fetchChoiceList">
        {type.map(drink => (
          <div key={drink.idDrink}>
            <RenderOne
              id={drink.idDrink}
              name={drink.strDrink}
              image={drink.strDrinkThumb}
            />
          </div>
        ))}
      </div>
      <ToTopButton />
    </div>
  );
};

export default FetchByType;

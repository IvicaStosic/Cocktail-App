import React, { useState, useEffect } from "react";
import RenderOne from "../RenderOne/RenderOne";

const FetchByGlass = ({ match }) => {
  const [glass, setGlass] = useState([]);

  useEffect(() => {
    fetchGlassList();
  }, []);

  const fetchGlassList = async () => {
    const glassChoice = match.params.glass.split(" ").join("_");
    console.log(glassChoice);
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glassChoice}`
    );
    const data = await response.json();
    console.log(data);
    setGlass(data.drinks);
  };

  return (
    <div>
      {glass.map(drink => (
        <div>
          <RenderOne
            key={drink.idDrink}
            id={drink.idDrink}
            name={drink.strDrink}
            image={drink.strDrinkThumb}
          />
        </div>
      ))}
    </div>
  );
};

export default FetchByGlass;

import React, { useState, useEffect } from "react";
import ToTopButton from "../Nav/ToTopButton";
import FetchByIds from "./FetchByIds";

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
        <h1 className="fetchChoice">{match.params.type} cocktails</h1>
      </div>
      <div className="fetchChoiceList">
        {type.map(drink => (
          <div key={drink.idDrink}>
            <FetchByIds id={drink.idDrink} />
          </div>
        ))}
      </div>
      <ToTopButton />
    </div>
  );
};

export default FetchByType;

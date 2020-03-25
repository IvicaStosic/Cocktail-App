import React, { useState, useEffect } from "react";
import FetchByIds from "./FetchByIds";
import "../../styles/style.css";
import ToTopButton from "../Nav/ToTopButton";
import { Link } from "react-router-dom";

const FetchByGlass = ({ match }) => {
  const [glass, setGlass] = useState([]);

  useEffect(() => {
    fetchGlassList();
  }, []);

  const fetchGlassList = async () => {
    const glassChoice = match.params.glass.split(" ").join("_");

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glassChoice}`
    );
    const data = await response.json();
    setGlass(data.drinks);
  };

  return (
    <div className="renderFetchChoice">
      <div>
        <h1 className="fetchChoice">
          Cocktails served in {match.params.glass}
        </h1>
      </div>
      <div className="fetchChoiceList">
        {glass.map(drink => (
          <div key={drink.idDrink}>
            <FetchByIds id={drink.idDrink} />
          </div>
        ))}
      </div>
      <Link to="/search/s_glass/glass" className="returnLink">
        <h1>Search by some other glass type</h1>
      </Link>
      <ToTopButton />
    </div>
  );
};

export default FetchByGlass;

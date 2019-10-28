import React, { useState, useEffect } from "react";

const RandomCocktail = () => {
  useEffect(() => {
    fetchRandom();
  }, []);

  const [random, setRandom] = useState([]);

  const fetchRandom = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const random = await response.json();
    console.log(random.drinks);
    setRandom(random.drinks);
  };

  return (
    <div>
      {random.map(drink => (
        <div key="drink.idDrink">
          <h1>{drink.strDrink}</h1>
          <h2>({drink.strAlcoholic})</h2>
        </div>
      ))}
    </div>
  );
};

export default RandomCocktail;

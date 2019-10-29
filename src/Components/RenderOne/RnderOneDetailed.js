import React from "react";
import "../../styles/style.css";

const RenderOneDetailed = props => {
  return (
    <div className="renderOne">
      <h4>{drink.strDrink}</h4>
      <p>({drink.strAlcoholic})</p>
      <img src={drink.strDrinkThumb} alt="not found" className="imgLarge"></img>
    </div>
  );
};

export default RenderOneDetailed;

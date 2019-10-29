import React from "react";
import "../../styles/style.css";

const RenderOne = ({ name, type, image }) => {
  return (
    <div className="renderOne">
      <h4>{name}</h4>
      <img src={image} alt="not found" className="imgSmall"></img>
      <p>({type})</p>
    </div>
  );
};

export default RenderOne;

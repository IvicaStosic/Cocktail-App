import React from "react";

const RenderOne = ({ name, type, image }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>({type})</p>
      <img src={image} alt="not found" width="25px" height="25px"></img>
    </div>
  );
};

export default RenderOne;

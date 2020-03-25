import React from "react";

import "../../styles/style.css";

const RenderList = props => {
  return <h1 onClick={props.choice}> {props.name} </h1>;
};

export default RenderList;

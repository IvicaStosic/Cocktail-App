import React from "react";

import "../../styles/style.css";

const Backdrop = ({ clicked }) => {
  return <div className="backdrop" onClick={clicked}></div>;
};

export default Backdrop;

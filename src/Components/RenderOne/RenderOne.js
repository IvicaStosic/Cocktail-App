import React, { useState } from "react";
import Popup from "../AllCocktails/Popup";
import { Link } from "react-router-dom";
import "../../styles/style.css";

const RenderOne = ({
  key,
  name,
  type,
  image,
  ing1,
  ing2,
  ing3,
  ing4,
  ing5,
  ing6,
  ing7,
  ing8,
  ing9,
  ing10,
  ing11,
  ing12,
  ing13,
  ing14,
  ing15,
  measure1,
  measure2,
  measure3,
  measure4,
  measure5,
  measure6,
  measure7,
  measure8,
  measure9,
  measure10,
  measure11,
  measure12,
  measure13,
  measure14,
  measure15,
  instructions,
  glass
}) => {
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <div className="renderOne" onClick={togglePopup}>
      <div className="photo">
        <Link to={`/all/1/${key}`}>
          <img src={image} alt="not found" className="imgSmall"></img>
        </Link>
      </div>
      <div className="shortDescription">
        <h4>{name}</h4>
        <p>({type})</p>
      </div>

      {popup ? (
        <Popup
          closePopup={togglePopup}
          key={key}
          name={name}
          type={type}
          image={image}
          ing1={ing1}
          ing2={ing2}
          ing3={ing3}
          ing4={ing4}
          ing5={ing5}
          ing6={ing6}
          ing7={ing7}
          ing8={ing8}
          ing9={ing9}
          ing10={ing10}
          ing11={ing11}
          ing12={ing12}
          ing13={ing13}
          ing14={ing14}
          ing15={ing15}
          measure1={measure1}
          measure2={measure2}
          measure3={measure3}
          measure4={measure4}
          measure5={measure5}
          measure6={measure6}
          measure7={measure7}
          measure8={measure8}
          measure9={measure9}
          measure10={measure10}
          measure11={measure11}
          measure12={measure12}
          measure13={measure13}
          measure14={measure14}
          measure15={measure15}
          instructions={instructions}
          glass={glass}
        />
      ) : null}
    </div>
  );
};

export default RenderOne;

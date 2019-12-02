import React from "react";
import RenderOneDetailed from "../RenderOne/RenderOneDetailed";
import "../../styles/style.css";

const Popup = props => {
  return (
    <div className="popup">
      <div className="popup\_inner">
        <RenderOneDetailed
          key={props.id}
          id={props.id}
          name={props.name}
          type={props.type}
          image={props.image}
          ing1={props.ing1}
          ing2={props.ing2}
          ing3={props.ing3}
          ing4={props.ing4}
          ing5={props.ing5}
          ing6={props.ing6}
          ing7={props.ing7}
          ing8={props.ing8}
          ing9={props.ing9}
          ing10={props.ing10}
          ing11={props.ing11}
          ing12={props.ing12}
          ing13={props.ing13}
          ing14={props.ing14}
          ing15={props.ing15}
          measure1={props.measure1}
          measure2={props.measure2}
          measure3={props.measure3}
          measure4={props.measure4}
          measure5={props.measure5}
          measure6={props.measure6}
          measure7={props.measure7}
          measure8={props.measure8}
          measure9={props.measure9}
          measure10={props.measure10}
          measure11={props.measure11}
          measure12={props.measure12}
          measure13={props.measure13}
          measure14={props.measure14}
          measure15={props.measure15}
          instructions={props.instructions}
          glass={props.glass}
        />
        <button onClick={props.closePopup}>close me</button>
      </div>
    </div>
  );
};

export default Popup;

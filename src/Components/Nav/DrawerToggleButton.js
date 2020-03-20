import React, { useState } from "react";
import SideDrawer from "./SideDrawer";
import Backdrop from "../Backdrop/Backdrop";

const DrawerToggleButton = () => {
  const [isToggled, setToggled] = useState(false);

  const drawerClickHandler = () => {
    setToggled(!isToggled);
  };

  if (isToggled) {
    return (
      <div>
        <SideDrawer clicked={isToggled} />
        <Backdrop clicked={drawerClickHandler} />
      </div>
    );
  }

  return (
    <div>
      <button className="toggleButton" onClick={drawerClickHandler}>
        <div className="toggleButtonLine"></div>
        <div className="toggleButtonLine"></div>
        <div className="toggleButtonLine"></div>
      </button>
    </div>
  );
};

export default DrawerToggleButton;

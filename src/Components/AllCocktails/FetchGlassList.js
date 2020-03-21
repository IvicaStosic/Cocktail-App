import React, { useState, useEffect } from "react";

import RenderList from "../RenderOne/RenderList";

const FetchGlassList = () => {
  const [glasses, setGlasses] = useState([]);

  useEffect(() => {
    fetchGlassesList();
  }, []);

  const fetchGlassesList = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"
    );
    const data = await response.json();
    setGlasses(data.drinks);
  };

  return (
    <div className="glassesList">
      {glasses.map(glass => (
        <div key={glass.strGlass} className="glassesListSpecific">
          <RenderList name={glass.strGlass} />
        </div>
      ))}
    </div>
  );
};

export default FetchGlassList;

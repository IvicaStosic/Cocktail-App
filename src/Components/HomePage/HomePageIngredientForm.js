import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomePageIngredientForm = () => {
  const [ing, setIng] = useState([]);

  const updateIng = e => {
    setIng(e.target.value);
    console.log({ ing });
  };

  /* const fetchByIng = e => {
    <div>
      <Link to={`/all/ing/${ing}`} className="tableLink"></Link>
    </div>;
  };
*/
  return (
    <div>
      <form>
        <input type="text" name="ing" value={ing} onChange={updateIng} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default HomePageIngredientForm;

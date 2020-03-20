import React from "react";
import NavBar from "./Components/Nav/NavBar";
import "./styles/style.css";

import { CocktailProvider } from "./Components/CocktailProvider/CocktailContext";

function App() {
  return (
    <div className="App">
      <CocktailProvider>
        <div className="main">
          <NavBar />
        </div>
      </CocktailProvider>
    </div>
  );
}

export default App;

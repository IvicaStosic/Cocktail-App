import React from "react";
import Logo from "./Components/Logo/Logo";
import NavBar from "./Components/Nav/NavBar";
import "./styles/style.css";

import { CocktailProvider } from "./Components/CocktailProvider/CocktailContext";

function App() {
  return (
    <div className="App">
      <CocktailProvider>
        <header className="App-header">
          <Logo />
          <NavBar />
        </header>
      </CocktailProvider>
    </div>
  );
}

export default App;

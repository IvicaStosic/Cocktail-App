import React, { Component } from "react";
import HomePageNameMenu from "./HomePageNameMenu";
import HomePageGlassTypeMenu from "./HomePageGlassTypeMenu";
import HomePageIngredientMenu from "./HomePageIngredientMenu";

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>Search by:</button>

        {this.state.showMenu ? (
          <div
            className="menu"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <button>
              {" "}
              <HomePageNameMenu />{" "}
            </button>
            <button>
              {" "}
              <HomePageIngredientMenu />{" "}
            </button>
            <button>
              {" "}
              <HomePageGlassTypeMenu />{" "}
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Menu;

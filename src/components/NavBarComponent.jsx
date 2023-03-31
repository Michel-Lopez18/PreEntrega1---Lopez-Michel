import React from "react";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";

const NavBarComponent = (props) => {
  const nameOption = ["Inicio", "Productos", "Promos", "Contacto"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">Navbar</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ListOptionNavBarComponent
            nameOption={nameOption}
          ></ListOptionNavBarComponent>
        </div>
      </div>
    </nav>
  );
};
export default NavBarComponent;

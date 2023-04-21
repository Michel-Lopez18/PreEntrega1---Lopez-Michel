import React from "react";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import CartWidget from "./CartWidget";
import useFetch from "../utils/useFetch";
import { NavLink } from "react-router-dom";
const BASE_URL = "https://fakestoreapi.com/products/categories";

const NavBarComponent = (props) => {
  const [data] = useFetch(BASE_URL);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <span className="navbar-brand ">
          <NavLink to="/">
            <img
              width={100}
              height={100}
              src="https://i.pinimg.com/originals/99/b0/e5/99b0e593f9237abf16df5cb1b1a87735.png"
              alt=""
            />
          </NavLink>
        </span>
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
            nameOption={data}
          ></ListOptionNavBarComponent>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};
export default NavBarComponent;

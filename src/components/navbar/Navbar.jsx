import React from "react";
import CartWidget from "../cart/CartWidget";
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          DISTILLAR
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to={"/"}>
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/tequilas"}>
                Tequilas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/whiskys"}>
                Whisky's
              </NavLink>
            </li>
          </ul>
          <div className="d-flex justify-content-center">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

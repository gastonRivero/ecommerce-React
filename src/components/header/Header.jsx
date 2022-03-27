import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../cart/CartWidget";
import Distillar from "../../assets/img/Distillar.png"

const Header = () => {
  return (
    <div className=" container-fluid ">
      <div className=" d-flex navbar-expand-lg navbar-light bg-light ">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <NavLink className="navbar-brand" to={"/"}>
            <img src={Distillar} className="img-fluid"/>
          </NavLink>
        </div>
        <div className="navbar-brand">
          <CartWidget />
        </div>

      </div>
    </div>
  );
};

export default Header;

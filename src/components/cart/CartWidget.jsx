import React, { useContext } from "react";
import context from "../../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import "../cart/cart.css";

const CartWidget = () => {
  const { tot } = useContext(context);

  return (
    <div>
      <NavLink
        to={"/cart"}
        className="d-flex"
        style={{
          border: "none",
          fontSize: "2rem",
          backgroundColor: "transparent",
          textDecoration: "none",
          color: "black",
        }}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        <div className="ProductNum">{tot === 0 ? null : <p>{tot}</p>}</div>
      </NavLink>
    </div>
  );
};

export default CartWidget;

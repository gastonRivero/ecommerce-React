import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <div className="app d-flex" style={{ fontSize: "35px" }}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <p style={{ fontSize: "25px" }}>4</p>
    </div>
  );
};

export default CartWidget;

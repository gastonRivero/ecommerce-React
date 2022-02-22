import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to={"/cart"}
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
        <p style={{ fontSize: "1.5rem" }}>1</p>
      </Link>
    </div>
  );
};

export default CartWidget;

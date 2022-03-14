import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoProv";

import "../cart/cart.css";

const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);

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
        <div className="ProductNum">
          {carrito.length === 0 ? "" : carrito.length}
        </div>
      </NavLink>
    </div>
  );
};

export default CartWidget;

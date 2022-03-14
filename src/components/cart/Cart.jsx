import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoProv";
import CartItem from "../cartItem/CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { carrito, precioTotal, removeAllItems } = useContext(CarritoContext);

  return (
    <>
      {carrito.length < 1 ? (
        <div>
          <h1> ¡Te olvidaste de agregar productos! </h1>
          <NavLink className=" btn btn-danger" to={"/"}>
            volver a comprar
          </NavLink>
        </div>
      ) : (
        carrito.map((elemento) => (
          <CartItem key={elemento.id} item={elemento} />
        ))
      )}
      {carrito.length >= 1 && (
        <div className="card-title">
          Precio total
          <div className="card-text">$ {precioTotal}</div>
          <div>
            <button
              className=" btn btn-danger"
              style={{ width: "20vh" }}
              onClick={removeAllItems}
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

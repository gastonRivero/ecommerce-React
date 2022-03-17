import React, { useContext, useState } from "react";
import context from "../../context/context";
import CartItem from "../cartItem/CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { carrito, setCarrito, value, setValue, setTot } = useContext(context);
  const [e, setE] = useState(true);
  const vaciarCarrito = () => {
    setCarrito([]);
    setTot(0);
    setValue(0);
  };

  return (
    <>
      {carrito.length === 0 ? (
        <div>
          <h1> ¡Te olvidaste de agregar productos! </h1>
          <NavLink className=" btn btn-danger" to={"/"}>
            volver a comprar
          </NavLink>
        </div>
      ) : (
        <div>
          {carrito.map((producto) => {
            return (
              <div key={producto.id}>
                <CartItem item={producto} e={e} setE={setE} />
              </div>
            );
          })}
          <h2>{value}</h2>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
      )}
    </>
  );
};

export default Cart;

{
  /* {carrito.length < 1 ? (
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
          <div className="card-text">$ {tot}</div>
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
      )} */
}

import React, { useContext, useState } from "react";
import context from "../../context/context";
import CartItem from "../cartItem/CartItem";
import { Go, VolverAC } from "../utilities/Utilities";
import carritoVacio from "../../assets/img/carritoVacio.png";

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
        <div className="cartForg">
          <h1> ¡Te olvidaste de agregar productos! </h1>
          <img src={carritoVacio} className=" img-fluid" alt="" />
          <div className="volverAc">
            <VolverAC />
          </div>
        </div>
      ) : (
        <div>
          <div className=" container ">
            <h2 className="font-weight-bold pt-5"> Tu Carrito</h2>
            <hr />
          </div>
          <div id="cart-container" className="container my-1 ">
          <table>
              <thead>
                <tr>
                  <td>Borrar</td>
                  <td>Imagen</td>
                  <td>Producto</td>
                  <td>Precio</td>
                  <td>Cantidad</td>
                  <td>Acciones</td>
                </tr>
              </thead>
              <tbody>
                {
                    carrito.map((producto) => {
                      return (
                        <CartItem key={producto.i.item.id} item={producto} e={e} setE={setE} />
                      );
                    })
                 }
              </tbody>
            </table>
          </div>
          
          <div className="my-5">
            <button className=" btn btn-danger" onClick={vaciarCarrito}>
              Vaciar carrito
            </button>
          </div>
          <div id="cart-bottom" className="container">
            <div className="row">
              <div className="coupon col-lg-6 col-md-6 col-12 mb-4">
                <div>
                  <h5>🤨 ¡RECORDATORIO! 🤨</h5>
                  <p>
                    Una vez que termines la compra, asegurate de colocar bien
                    tus datos de contacto, para poder realizar el envío
                    correctamente.
                  </p>
                </div>
              </div>
              <div className="total col-lg-6 col-md-6 col-12">
                <div>
                  <h5> Total de tu compra</h5>
                  <div className="d-flex justify-content-between">
                    <h6> Total:</h6>
                    <p>$ {value}</p>
                  </div>
                  <hr className="second-hr" />
                  <div className="butt">
                    <Go />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

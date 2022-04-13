import React, { useContext } from "react";
import context from "../../context/context";
import "./../cart/cart.css";

const CartItem = ({ item, e, setE }) => {
  const { carrito, setCarrito, tot, setTot, value, setValue } =
    useContext(context);

  const removeItem = () => {
    let cart = carrito;
    let ac = 0;
    let total = 0;

    for (let pro of carrito) {
      if (pro.i.item.id === item.i.item.id) {
        let pos = carrito.indexOf(pro);
        cart.splice(pos, 1);
      }
    }
    for (let p of cart) {
      ac = ac + p.count;
      total = total + p.i.item.precio * p.count;
    }
    setCarrito(cart);
    setTot(ac);
    setValue(total);
    setE(!e);
  };

  const agregarProducto = () => {
    let c = carrito;
    for (let p of carrito) {
      if (item.i.item.id === p.i.item.id) {
        let pos = carrito.indexOf(p);
        if (p.count === p.i.item.stock) {
        } else {
          c[pos].count = p.count + 1;
          setCarrito(c);
          setValue(value + p.i.item.precio);
          setTot(tot + 1);
        }
      }
    }
  };

  const quitarProducto = () => {
    let c = carrito;
    for (let p of carrito) {
      if (item.i.item.id === p.i.item.id) {
        let pos = carrito.indexOf(p);
        if (p.count !== 1) {
          c[pos].count = p.count - 1;
          setCarrito(c);
          setValue(value - p.i.item.precio);
          setTot(tot - 1);
        }
      }
    }
  };
  return (
    <>
      <div id="cart-container" className="container my-5">
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <button className=" btn btn-danger" onClick={removeItem}>
                  x
                </button>
              </td>
              <td>
                <img
                  src={item.i.item.imagen}
                  className="img-fluid rounded-start"
                  alt={item.i.item.name}
                />
              </td>
              <td>
                <h5>{item.i.item.name}</h5>
              </td>
              <td>
                <p> $ {item.i.item.precio}</p>
              </td>
              <td>
                <h5> {item.count}</h5>
              </td>
              <td>
                <button
                  className=" btn btn-secondary m-2"
                  onClick={quitarProducto}
                >
                  -
                </button>
                <button
                  className=" btn btn-success m-2"
                  onClick={agregarProducto}
                >
                  +
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CartItem;

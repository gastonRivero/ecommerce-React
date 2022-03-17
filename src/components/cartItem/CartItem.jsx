import React, { useContext } from "react";
import context from "../../context/context";

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
          alert("límite de stock alcanzado"); //cambiar a popup
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
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={item.i.item.imagen}
            className="img-fluid rounded-start"
            alt={item.i.item.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.i.item.name}</h5>
            <p className="card-text">{item.i.item.description}</p>
            <div className="card-text">
              <h5 className="card-title">Cantidad: {item.count}</h5>
              <p>Precio por unidad: $ {item.i.item.precio}</p>
            </div>
            <button
              className=" btn btn-danger"
              style={{ width: "20vh" }}
              onClick={removeItem}
            >
              Quitar producto
            </button>
            <button
              className=" btn btn-danger"
              style={{ width: "20vh" }}
              onClick={quitarProducto}
            >
              -
            </button>
            <button
              className=" btn btn-danger"
              style={{ width: "20vh" }}
              onClick={agregarProducto}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

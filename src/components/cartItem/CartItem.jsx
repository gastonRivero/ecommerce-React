import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoProv";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CarritoContext);
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={item.imagen}
            className="img-fluid rounded-start"
            alt={item.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <div className="card-text">
              <h5 className="card-title">Cantidad: {item.quantity}</h5>
              <p>Precio por unidad: $ {item.precio}</p>
            </div>
            <button
              className=" btn btn-danger"
              style={{ width: "20vh" }}
              onClick={() => removeItem(item)}
            >
              Quitar producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

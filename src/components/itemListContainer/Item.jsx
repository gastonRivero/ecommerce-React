import React from "react";
import { Link } from "react-router-dom";


const Item = ({ bebidas }) => {
  return (
          <div className="card" style={{ width: "18rem" }}>
            <h4 className="card-title">{bebidas.name}</h4>
            <img src={bebidas.imagen} className="card-img-top " alt={bebidas.name} />
            <Link to= {`/item/${bebidas.id}`} className="btn btn-primary">Ver descripción</Link>
            <h5 className="card-title text-uppercasse text-center">
              $ {bebidas.precio}
            </h5>
            <div>
              <p>Stock:{bebidas.stock}</p>
            </div>
          </div>
  );
};


export default Item;

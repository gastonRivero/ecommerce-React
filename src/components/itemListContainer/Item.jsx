import React from "react";
import ItemCount from "../counter/ItemCount";
import { Link } from "react-router-dom";


const Item = ({ bebidas }) => {
  return (
    <div className="card" style={{width: "18rem"}} >
      <h4 className="card-title">{bebidas.name}</h4>
      <img
        src={bebidas.imagen}
        className="card-img-top "
        alt={bebidas.name}
      />
      <Link to= {`/item/${bebidas.id}`} className="btn btn-primary">Ver descripción</Link>
      <p className="card-text text-center" style={{height: "3rem"}}>{bebidas.description}</p>
      <h5 className="card-title text-uppercasse text-center">$ {bebidas.precio}</h5>
      <div>
        <ItemCount stock={bebidas.stock} initial={0} />
      </div>
      <div>
      <a href="#" className="btn btn-dark">
        Añadir
      </a>
      </div>

    </div>
  );
};


export default Item;

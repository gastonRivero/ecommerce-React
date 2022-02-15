import React from "react";
import ItemCount from "../counter/ItemCount";

const Item = ({ bebidas }) => {
  return (
    <>
      <h4 className="card-title">{bebidas.name}</h4>
      <img
        src={bebidas.imagen}
        className="card-img-top "
        Style={{ width: "40vh", heigth: "100vh" }}
        alt={bebidas.name}
      />
      <button className="btn btn-primary">Ver descripción</button>
      <p className="card-text">{bebidas.description}</p>
      <h5 className="card-title">$ {bebidas.precio}</h5>
      <div className="row align-items-center">
        <ItemCount stock={bebidas.stock} initial={0} />
      </div>
      <a href="#" className="btn btn-dark">
        Añadir
      </a>
    </>
  );
};


export default Item;

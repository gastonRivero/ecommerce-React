import React from 'react'
import ItemCount from "../counter/ItemCount";

const ItemDetail = (d) => {
  return (
    <>
    <h4 className="card-title">{d.name}</h4>
    <img
      src={d.imagen}
      className="card-img-top "
      alt={d.name}
    />
    <button className="btn btn-primary">Ver descripción</button>
    <p className="card-text">{d.description}</p>
    <h5 className="card-title">$ {d.precio}</h5>
    <div className="row align-items-center">
      <ItemCount stock={d.stock} initial={0} />
    </div>
    <a href="#" className="btn btn-dark">
      Añadir
    </a>
  </>
  )
}

export default ItemDetail
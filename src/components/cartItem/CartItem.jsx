import React from 'react'

const CartItem = ({item}) => {
  return (
    <div className="card mb-3" style={{ maxWidth:"540px" }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.imagen} class="img-fluid rounded-start" alt={item.name}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <button className=" btn btn-danger" style={{ width: "20vh" }}>Quitar producto</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default CartItem
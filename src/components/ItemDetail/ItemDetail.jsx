import React from "react";


export const ItemDetail = ({ item }) => {
  return (
    <>
      <div className="container">
        <div className="row my-5 justify-content-around">
          <div className="card" style={{ width: "18rem" }}>
            <h4 className="card-title">{item.name}</h4>
            <img src={item.imagen} className="card-img-top " alt={item.name} />
            <p className="card-text text-center" style={{ height: "3rem" }}>
              {item.description}
            </p>
            <h5 className="card-title text-uppercasse text-center">
              $ {item.precio}
            </h5>
            <div>
              <p>Stock:{item.stock}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;

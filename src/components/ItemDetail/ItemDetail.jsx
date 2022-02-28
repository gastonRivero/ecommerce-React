import React from "react";
import ItemCount from "../counter/ItemCount";


export const ItemDetail = ({ item }) => {
  return (
<div className="card" style={{width: "18rem"}} >
<h4 className="card-title">{item.name}</h4>
<img
  src={item.imagen}
  className="card-img-top "
  alt={item.name}
/>
<p className="card-text text-center" style={{height: "3rem"}}>{item.description}</p>
<h5 className="card-title text-uppercasse text-center">$ {item.precio}</h5>
<div>
  <ItemCount item={item} stock={item.stock} initial={1} />
</div>
</div>
  );
};

export default ItemDetail;

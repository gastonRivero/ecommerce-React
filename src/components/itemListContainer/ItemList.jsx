import React from "react";
import Item from "../itemListContainer/Item";

const ItemList = ({ bebidas }) => {
  return (
    <div className="row my-5 justify-content-around">
      {bebidas.map((b) => (
        <Item key={b.id} bebidas={b} />
      ))}
    </div>
  );
};
export default ItemList;

import React from "react";
import Item from "../itemListContainer/Item";

const ItemList = ({ bebidas }) => {
  return (
    <>
      {bebidas.map((b) => (
        <Item key={b.id} bebidas={b} />
      ))}
    </>
  );
};
export default ItemList;

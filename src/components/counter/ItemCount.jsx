import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  return (
    <>
      <div className="d-flex justify-content-center align-self-stretch">
        <button
          className="btn btn-secondary"
          onClick={() => {
            if (contador > initial) {
              setContador(contador - 1);
              onAdd(contador - 1);
            }
          }}
          style={{ width: "5rem", height: "3rem" }}
        >
          -
        </button>
        <p style={{ width: "20rem", hight: "5rem" }}>{contador}</p>
        <button
          onClick={() => {
            if (contador < stock) {
              setContador(contador + 1);
              onAdd(contador + 1);
            }
          }}
          className="btn btn-success"
          style={{ width: "5rem", height: "3rem" }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;

import React from "react";
import { useCounter } from "./useCounter";




const ItemCount = ({ stock, initial }) => {
  const { counter, increment, decrement } = useCounter(initial);
  const onAdd = () => {
    if (stock > 0 && counter !== stock) {
      increment();
    }
  };
  const onRest = () => {
    if (counter > 0) {
      decrement();
    }
  };

  return (
  <>
    <div className="d-flex justify-content-center align-self-stretch">
      <button
        className="btn btn-danger"
        onClick={() => onRest()}
        style={{ width: "5rem", height: "3rem" }}
        >
        -
      </button>
      <h1 style={{ width: "20rem", hight: "5rem" }}>{counter}</h1>
      <button
        onClick={() => onAdd()}
        className="btn btn-info"
        style={{ width: "5rem", height: "3rem" }}
      >
        +
      </button>
    </div>
  </>
  );
};

export default ItemCount;

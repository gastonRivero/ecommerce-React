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
        style={{ width: "20vh", height: "8vh" }}
        >
        -
      </button>
      <h1 style={{ width: "20vh", hight: "5vh" }}>{counter}</h1>
      <button
        onClick={() => onAdd()}
        className="btn btn-info"
        style={{ width: "20vh", height: "8vh" }}
      >
        +
      </button>
    </div>
  </>
  );
};

export default ItemCount;

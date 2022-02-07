import React, { useState } from "react";

const Prueba = ({ nombre }) => {
  const [contador, setContador] = useState(1);

  return (
    <>
      <div className="d-flex justify-content-center align-self-stretch">
        <button
          onClick={() => setContador(contador - 1)}
          className="btn btn-danger"
          style={{ width: "20vh", height: "8vh" }}
        >
          -
        </button>
        <h1 style={{ width: "20vh", hight: "5vh" }}>{contador}</h1>
        <button
          onClick={() => setContador(contador + 1)}
          className="btn btn-info"
          style={{ width: "20vh", height: "8vh" }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Prueba;

import React from "react";
import { NavLink } from "react-router-dom";

const Spinner = () => {
  return (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">cargando...</span>
    </div>
  );
};

export const VolverAC = () => {
  return (
    <NavLink className=" btn btn-danger" to={"/"}>
      Volver a comprar
    </NavLink>
  );
};

export const Go = () => {
  return (
    <NavLink className=" btn btn-success" to={"/checkout"}>
      Terminar compra
    </NavLink>
  );
};

export default Spinner;

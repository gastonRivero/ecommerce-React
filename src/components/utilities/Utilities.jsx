import React from 'react'
import { NavLink } from "react-router-dom";

const Spinner = () => {
  return (
    <div className="spin spinner-border" role="status">
  <span className="visually-hidden">cargando...</span>
</div>
  )
}

 export const VolverAC = () => {
  return (
    <NavLink className=" btn btn-danger" to={"/"}>
            volver a comprar
          </NavLink>
  )
}

export const Go = () => {
  return (
    <NavLink className=" btn btn-danger" to={"/checkout"}>
            Terminar compra
          </NavLink>
  )
}

export default Spinner
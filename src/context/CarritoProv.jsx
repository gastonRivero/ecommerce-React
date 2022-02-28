import { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProv = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item) => {
    setCarrito([...CarritoContext, item]);
  };

  let nombre = "gasti";


  return (
    <CarritoContext.Provider value={{ nombre, agregarAlCarrito, carrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProv;

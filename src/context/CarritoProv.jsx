import { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProv = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item]);
  };



  return (
    <CarritoContext.Provider value={{ agregarAlCarrito, carrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProv;

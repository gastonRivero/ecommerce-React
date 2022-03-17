import React, { useState } from "react";
import { Provider } from "./context";

const CarritoProv = ({ children }) => {
  // productos del carrito
  const [carrito, setCarrito] = useState([]);
  //Total de productos
  const [tot, setTot] = useState(0);
  // valor total de los productos
  const [value, setValue] = useState(0);

  

 

  return (
    <Provider
      value={{
        carrito,
        setCarrito,
        tot,
        setTot,
        value,
        setValue,
      }}
    >
      {children}
    </Provider>
  );
};

export default CarritoProv;

import { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProv = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (products) => {
    const IsInCart = carrito.find((item) => item.id === products.id);
    if (IsInCart) {
      setCarrito(
        carrito.map((item) =>
          item.id === products.id
            ? { ...IsInCart, quantity: IsInCart.quantity + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...products, quantity: 1 }]);
    }
  };

  const removeItem = (products) => {
    const IsInCart = carrito.find((item) => item.id === products.id);
    if (IsInCart.quantity === 1) {
      setCarrito(carrito.filter((item) => item.id !== products.id));
    } else {
      setCarrito(
        carrito.map((item) =>
          item.id === products.id
            ? { ...IsInCart, quantity: IsInCart.quantity - 1 }
            : item
        )
      );
    }
  };

  const precioTotal = carrito.reduce(
    (precio, item) => precio + item.quantity * item.precio,
    0
  );

  const removeAllItems = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        removeItem,
        precioTotal,
        removeAllItems,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProv;

import React, { useContext, useState } from "react";
import context from "../../context/context";
import ItemCount from "../counter/ItemCount";
import { Link } from "react-router-dom";
import { VolverAC } from "../utilities/Utilities";

export const ItemDetail = ({ item }) => {
  //Estado encargado de contar la cantidad de productos
  const [count, setCount] = useState(1);
  //Función encargada de gestionar la cantidad de productos seleccionados
  const onAdd = (contador) => {
    setCount(contador);
  };

  //Botón de agregar productos y desmontar
  const [btn, setBtn] = useState(true);
  //Función encargada de desmontar botón
  const sBtn = () => {
    setBtn(false);
  };

  const { carrito, setCarrito, tot, setTot, value, setValue } =
    useContext(context);
  const agregarAlCarrito = () => {
    //instancia de producto
    const p = { i: { item }, count };
    //total productos
    let ac = 0;
    //total valor productos
    let total = 0;
    // si el array del carrito esta vacio, se añade el producto al carrito.
    if (carrito.length === 0) {
      //se agrega la cantidad de productos al contador
      ac = ac + p.count;
      setTot(ac);
      //se agrega el producto al carrito
      setCarrito([p]);
      //se agrega el valor total del producto
      total = p.count * p.i.item.precio;
      setValue(total);

      //si el carrito no está vacío se evaluan las posiciones
    } else {
      //se crea una copia del carrito
      let cart = carrito;
      //flag
      let repetido = false;
      //se evalúa posicion x por posicion si el producto a añadir está en el carrito
      for (let pro of carrito) {
        //si un producto del carrito coincide con el producto a añadir
        if (pro.i.item.id === p.i.item.id) {
          //cambia estado booleano
          repetido = true;
          //se averigua la posición del elemento
          let pos = carrito.indexOf(pro);
          //stock
          let stock = carrito[pos].i.item.stock;
          //cantidad
          let rep = carrito[pos].count + p.count;

          // menor stock
          if (rep < stock) {
            //se modifica la copia del carrito
            cart[pos].count = rep;
            //modificar contador total
            for (let p of cart) {
              ac = ac + p.count;
              total = total + p.i.item.precio * p.count;
            }
            setTot(ac);
            setValue(total);
            setCarrito(cart);
          } else if (rep >= stock) {
            //se modifica la copia del carrito
            cart[pos].count = stock;
            //modificar contador total
            for (let p of cart) {
              ac = ac + p.count;
              total = total + p.i.item.precio * p.count;
            }
            setTot(ac);
            setValue(total);
            setCarrito(cart);
            console.log(
              `error, solo se pueden agregar ${stock} ${p.i.item.name}`
            );
          } else {
            console.log("error al agregar productos");
          }
        }
      }
      //si se comprobo que no hay elementos repetidos, se agrega el producto al carrito
      if (repetido === false) {
        let t = tot + p.count;
        setTot(t);
        let total = value + p.i.item.precio * p.count;
        setValue(total);
        setCarrito([...carrito, p]);
      }
    }
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={item.imagen}
            className="img-fluid rounded-start "
            alt={item.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="p-card card-text" style={{ height: "3rem" }}>
              {item.description}
            </p>
            <h5 className="h-card card-title ">$ {item.precio}</h5>
            <p className="p-card card-text">Stock:{item.stock}</p>
            <div className="item-count">
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </div>
            {btn ? (
              <div className="item-boton">
                <button onClick={sBtn} className={"btn btn-dark"}>
                  Deseo agregar {count} {item.name} al carrito.
                </button>
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                <div className="añadir-item">
                  <Link to="/cart">
                    <button
                      onClick={agregarAlCarrito}
                      className={"btn btn-dark"}
                    >
                      Añadir
                    </button>
                  </Link>
                </div>
                <div className="volverAc-item">
                  <VolverAC />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

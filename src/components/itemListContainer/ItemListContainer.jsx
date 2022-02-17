import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ nombre }) => {
  const bebidas = [
    {
      id: 1,
      name: "Patrón",
      description: "100% de agrave azul reposado. 750ML.",
      stock: 25,
      imagen:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1621260365-41ZWZinUm7L._SL500_.jpg",
      precio: 4850,
    },
    {
      id: 2,
      name: "Chivas Regal",
      description: "Whisky de doble maduración. 750ML.",
      stock: 13,
      imagen:
        "https://gobar.vteximg.com.br/arquivos/ids/155785-500-500/01032600054.jpg?v=636685828453900000",
      precio: 7482,
    },
    {
      id: 3,
      name: "Jack Daniels",
      description: "Whisky 18 años. 750ML.",
      stock: 10,
      imagen:
        "http://d2r9epyceweg5n.cloudfront.net/stores/118/622/products/oo1-72048a6b56b7bdea7215593264591531-640-0.jpg",
      precio: 5950,
    },
  ];

const[data, setData] = useState(null);

  
useEffect (() =>{
  const beber = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(bebidas);
    }, 2000);
    // reject ("No hay resultados")
  });

  beber
    .then((result) => {
      setData(result);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  
    

  return (
    <div>
      {data == null
       ? 
       <h1> no hay productos</h1> 
       :
        <div className="d-flex justify-content-around">
        <div className="card">
          <div className="card-body">
            <ItemList bebidas={bebidas}/>
          </div>
        </div>
      </div>}
    </div>
  );
};



export default ItemListContainer;

import React from "react";

const ItemListContainer = ({ nombre }) => {
  const bebidas = [
    {
      id: "1",
      name: "Patrón",
      description: "100% de agrave azul reposado. 750ML.",
      stock: "25",
    },
    {
      id: "2",
      name: "Chivas Regal",
      description: "Whisky de doble maduración. 750ML.",
      stock: "13",
    },
    {
      id: "3",
      name: "Jack Daniels",
      description: "Whisky 18 años. 750ML.",
      stock: "10",
    },
  ];

  const beber = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(bebidas) 
  }, 3000)

  });

  beber
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(beber);

  return (
    <div>
      <h4>Bienvenidos a {nombre}</h4>
    </div>
  );
};

export default ItemListContainer;

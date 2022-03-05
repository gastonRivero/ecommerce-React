import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const bebidas = [
    {
      id: 1,
      name: "Patrón",
      description: "100% de agrave azul reposado. 750ML.",
      stock: 8,
      imagen:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1621260365-41ZWZinUm7L._SL500_.jpg",
      precio: 4850,
      category: "Tequila",
    },
    {
      id: 2,
      name: "Chivas Regal",
      description: "Whisky 12 años. 750ML.",
      stock: 9,
      imagen:
        "https://gobar.vteximg.com.br/arquivos/ids/155785-500-500/01032600054.jpg?v=636685828453900000",
      precio: 7482,
      category: "Whisky",
    },
    {
      id: 3,
      name: "Jack Daniels",
      description: "Whisky de doble maduración 7 años. 750ML.",
      stock: 10,
      imagen:
        "http://d2r9epyceweg5n.cloudfront.net/stores/118/622/products/oo1-72048a6b56b7bdea7215593264591531-640-0.jpg",
      precio: 5950,
      category: "Whisky",
    },
    {
      id: 4,
      name: "Buchanan's",
      description: "Whisky 18 años. 750ML.",
      stock: 7,
      imagen:
        "https://static.wixstatic.com/media/4787b9_5a04c7854b004bc593396b6e31c13b09~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      precio: 8975,
      category: "Whisky",
    },
    {
      id: 5,
      name: "The Glenlivet",
      description: "Whisky single malt 15 años. 750ML.",
      stock: 5,
      imagen:
        "https://gobar.vteximg.com.br/arquivos/ids/155811-500-500/01032600126.jpg?v=636685828646500000",
      precio: 13456,
      category: "Whisky",
    },
  ];

  const { categoryId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const beber = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(bebidas);
      }, 1000);
      // reject ("No hay resultados")
    });

    beber
      .then((result) => {
        const filtro = result.filter((b) => b.category === categoryId);
        if (filtro.length === 0) {
          setData(result);
        } else {
          setData(filtro);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId]);

  return (
    <div>
      {data == null ? (
        <h1> Cargando...</h1>
      ) : (
        <div className="container-fluid">
          <ItemList bebidas={data} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;

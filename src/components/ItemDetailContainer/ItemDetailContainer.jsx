import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";


const item = [
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
    name: "Jose Cuervo",
    description: "100% de agrave azul especial. 750ML.",
    stock: 18,
    imagen:
      "https://gobar.vteximg.com.br/arquivos/ids/155868-500-500/01032400018.jpg?v=636685828914000000",
    precio: 5850,
    category: "Tequila",
  },
  {
    id: 3,
    name: "Corralejo",
    description: "100% de agrave azul reposado. 750ML.",
    stock: 14,
    imagen:
      "https://bottegaalcolica.com/12429-large_default/tequila-corralejo-blanco.jpg",
    precio: 7200,
    category: "Tequila",
  },
  {
    id: 4,
    name: "El Jimador",
    description: "100% de agrave blanco. 750ML.",
    stock: 12,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_725987-MLA45656458467_042021-O.webp",
    precio: 4850,
    category: "Tequila",
  },
  {
    id: 5,
    name: "Chivas Regal",
    description: "Whisky 12 años. 750ML.",
    stock: 9,
    imagen:
      "https://gobar.vteximg.com.br/arquivos/ids/155785-500-500/01032600054.jpg?v=636685828453900000",
    precio: 7482,
    category: "Whisky",
  },
  {
    id: 6,
    name: "Jack Daniels",
    description: "Whisky de doble maduración 7 años. 750ML.",
    stock: 10,
    imagen:
      "http://d2r9epyceweg5n.cloudfront.net/stores/118/622/products/oo1-72048a6b56b7bdea7215593264591531-640-0.jpg",
    precio: 5950,
    category: "Whisky",
  },
  {
    id: 7,
    name: "Buchanan's",
    description: "Whisky 18 años. 750ML.",
    stock: 3,
    imagen:
      "https://static.wixstatic.com/media/4787b9_5a04c7854b004bc593396b6e31c13b09~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    precio: 8975,
    category: "Whisky",
  },
  {
    id: 8,
    name: "The Glenlivet",
    description: "Whisky single malt 15 años. 750ML.",
    stock: 9,
    imagen:
      "https://gobar.vteximg.com.br/arquivos/ids/155811-500-500/01032600126.jpg?v=636685828646500000",
    precio: 13456,
    category: "Whisky",
  },
  {
    id: 9,
    name: "Beefeater Gin",
    description: "gin gin gin",
    stock: 9,
    imagen:
      "https://gobar.vteximg.com.br/arquivos/ids/155741-500-500/01031900001.jpg?v=636685828081900000",
    precio: 4210,
    category: "Ginebra",
  },
  {
    id: 10,
    name: "Bombay sapphire Gin",
    description: "London Dry. 750ML.",
    stock: 10,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_669612-MLA43643320606_102020-O.jpg",
    precio: 3000,
    category: "Ginebra",
  },
  {
    id: 11,
    name: "Hendrick's Dry Gin",
    description: "gingingingigng",
    stock: 3,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_820346-MLA43643305662_102020-O.webp",
    precio: 3500,
    category: "Ginebra",
  },
  {
    id: 12,
    name: "Aconcagua Gin",
    description: "Botella Handcrafted. 750ML.",
    stock: 9,
    imagen:
      "https://gobar.vteximg.com.br/arquivos/ids/155811-500-500/01032600126.jpg?v=636685828646500000",
    precio: 1856,
    category: "Ginebra",
  },
  {
    id: 13,
    name: "Cerveza Temple",
    description: "Honey rubia lata 473ML. 6 unidades.",
    stock: 9,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_685208-MLA44839749640_022021-O.jpg",
    precio: 950,
    category: "Cerveza",
  },
  {
    id: 14,
    name: "Cerveza Patagonia",
    description: "Abrazo De Oso Lata 473ML. 6 unidades.",
    stock: 10,
    imagen:
      "https://juanse-tucuman.tiendalite.com/images/products/500/64-803.jpg",
    precio: 1120,
    category: "Cerveza",
  },
  {
    id: 15,
    name: "Cerveza Goose Island",
    description: "IPA rubia lata 473ML. 6 unidades.",
    stock: 3,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_742342-MLA44839778478_022021-O.webp",
    precio: 1222,
    category: "Cerveza",
  },
  {
    id: 16,
    name: "Cerveza Corona",
    description: "American Adjunct Lager rubia. 330ML. 6 unidades.",
    stock: 9,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_942477-MLA44839755696_022021-O.jpg",
    precio: 1356,
    category: "Cerveza",
  },
];


const ItemDetailContainer = () => {
  const { id } = useParams();  
  const [data, setData] = useState(null);
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(item[id-1]);
      }, 100);
    });

    tarea
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
    },[]);

  return (
    <div>
    {data == null ? (
      <h1> Cargando...</h1>
    ) : (
      <div className="container-fluid">
        <ItemDetail item={data}/>
      </div>
    )}
  </div>


  );
};

export default ItemDetailContainer;

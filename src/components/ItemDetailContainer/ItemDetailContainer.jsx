import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    
    const detalle = [
        {
          id: 1,
          name: "Patrón",
          description: "100% de agrave azul reposado. 750ML.",
          stock: 25,
          imagen:
            "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1621260365-41ZWZinUm7L._SL500_.jpg",
          precio: 4850,
        }]

        const [data, setData] = useState(null);

  
        useEffect (() =>{
          const beber = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(detalle);
            }, 3000);
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
        {detalle.map((d) => (
        <ItemDetail key={d.id} detalle={d} />
      ))}
        </div>
      </div>
    </div>}

  </div>

  )
}

export default ItemDetailContainer
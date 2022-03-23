import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../service/firebase";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";




const ItemDetailContainer = () => {
  const { id } = useParams();  
  const [data, setData] = useState(null);
  
  const getDatabyId = async () => {
    let data = collection(db, 'items');
    let col = await getDocs(data);
    let res = col.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }));
    res = res.filter((item) => item.id === id);

    setData(res[0]);
  };

  useEffect(() => {
    getDatabyId();
  }, [])
  
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

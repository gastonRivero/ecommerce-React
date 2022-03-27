import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../service/firebase";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from "../utilities/Utilities";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const data = collection(db, "items");
      const col = await getDocs(data);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      if (categoryId === undefined) {
        setData(result);
      } else if (categoryId) {
        let reFiltered = result.filter((e) => e.category === categoryId);
        setData(reFiltered);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [categoryId]);

  return (
    <div>
      {data == null ? (
        <div className="spin"> <Spinner /> </div>
      ) : (
        <div className="container-fluid">
          <ItemList bebidas={data} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;

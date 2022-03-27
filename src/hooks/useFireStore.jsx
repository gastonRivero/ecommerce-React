import  { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import db from "../service/firebase";

const useFireStore = () => {

    const [load, setLoad] = useState(false)
const [ordenOk, setOrdenOk] =useState(false)
const [idOk, setIdOk] =useState()
const generateOrder = async ({datos}) => {
setLoad(true)
    try {
        const col =collection(db, "orders");
        const order = await addDoc(col, datos)
        setLoad(false)
        setOrdenOk(true)
        setIdOk(order.id)
    } catch (error) {
        console.log(error)
        setLoad(false)
    }
}

  return {
    generateOrder,
    load,
    ordenOk,
    idOk,
  }
}

export default useFireStore
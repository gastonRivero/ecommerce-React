import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoProv'
import CartItem from '../cartItem/CartItem'

const Cart = () => {

  const {carrito} = useContext(CarritoContext)
  return (
    <>
    {carrito.length < 1 ? <h1>Carrito vacio</h1> : carrito.map ((elemento) => 
    <CartItem key={elemento.id} item = {elemento}/>
    )}
    </>
    
  )
}

export default Cart
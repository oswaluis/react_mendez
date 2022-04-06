import './cart.css'
import React from 'react'
import { useCartContext } from '../../context/CartContext'

function Cart() {

  const {cartList , borrarCarrito, existeItem} = useCartContext()
  console.log(existeItem)
  return (
    <div>
      <ul>Productos</ul>
      {cartList.map(prod => <li key={prod.id} className='listaCar'>nombre: { prod.nombre} cantidad: { prod.cantidad}</li>)}
      <button className='btn btn-warning' onClick={borrarCarrito} >Vaciar Carrito</button>
      
    </div>
  )
}

export default Cart
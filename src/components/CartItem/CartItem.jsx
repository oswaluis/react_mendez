import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './CartItem.css'



function CartItem({id, nombre, cantidad, precio}) {
 const {eliminarItem} = useCartContext()
 
 
    return (
    <div className='contenedorCarrito'>  
        <h3>Nombre: {nombre}</h3>
        <h3>Cantidad: {cantidad} </h3>
        <h3>Precio: ${precio}</h3>
        <h3>total: ${cantidad*precio} </h3>
        <button onClick={()=>eliminarItem(id)} className='btnEliminarProducto'>Eliminar Producto</button><br/>
    </div>
  )
}

export default CartItem
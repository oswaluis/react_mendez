import React from 'react'
import ItemCount from '../../Container/ItemCount/ItemCount'
import {  useCartContext } from '../../context/CartContext'
import './itemDetail.css'


  function ItemDetail( {producto}) {
    const {addToCart} = useCartContext()
    
    function onAdd(cant){
      console.log(cant)
      addToCart({...producto, cantidad:cant})
    }
     

    return (
      <div className='detalleProducto'>
      <ul>
          <img className='detalleImg' src={producto.foto} alt="" width='200px'/>
          <h2>Detalle del producto</h2>
          <li>Nombre: {producto.nombre}</li> 
          <li>Tipo: {producto.tipo}</li> 
          <li>Disponible: {producto.stock}</li> 
          <li>Precio: ${producto.precio}</li> 
          
      </ul>
          
          <ItemCount onAdd={onAdd} producto={producto}/>
      </div>
    
    )
  }   

export default ItemDetail
import React from 'react'

function ItemDetail( {stock}) {
  return (
    <div>
        Detalle del producto
            {stock.nombre}
            {stock.tipo}
            {stock.talle}
            {stock.precio}
    </div>
  )
}

export default ItemDetail
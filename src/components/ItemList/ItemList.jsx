import React,{memo} from 'react'
import ItemCard from '../ItemCard/ItemCard'
import './itemList.css'


const ItemList = memo(
({producto}) => {

  return (
    <>
    { producto.length ? ( 
      <>
      {producto.map((producto)=> <ItemCard key={producto.id} stock={producto} />)}
      </> ) : ( <p>Cargando Productos...</p> )
  }</>
  )
})

export default ItemList
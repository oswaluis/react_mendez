import React,{useEffect, useState} from 'react'
import { stock } from '../../data/productos'
import ItemCard from '../ItemCard/ItemCard'
import './itemList.css'





const ItemList= ()=> {
  const [productos , setProductos] = useState([]);
  const getProductos = new Promise((resolve, reject) =>{
    setTimeout(()=>{  resolve(stock);},2000);
  });
  const getStockFromData = async () =>{
    try{ 
      const resultado = await getProductos;
      setProductos(resultado);

    }catch (error){
      alert('Pagina en mantenimiento')
    }
  };
  useEffect(()=> { getStockFromData();},[])
  return (
    <>
    { productos.length ? ( 
      <>
      {stock.map((stock)=> <ItemCard key={stock.id} stock={stock} />)}
      </> ) : ( <p>Cargando Productos...</p> )
  }</>
  )
}

export default ItemList
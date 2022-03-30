import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getFetch, getFetchOne } from '../../data/getFetch'
import { stock } from '../../data/productos'
import ItemCard from '../ItemCard/ItemCard'
import './itemList.css'




function ItemList({producto}) {
  const [productos , setProductos] = useState([]);
  // const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  // const {productosId} = useParams()

  // useEffect(()=>{
  //   if(productosId){
  //     getFetchOne
  //     .then(resp =>setProducto(resp.filter(elemento => elemento.tipo === productosId)))
  //     .catch(err =>console.log(err))
  //     .finally(() => setLoading(false))
  //   }else{
  //     getFetchOne
  //     .then(resp =>setProducto(resp))
  //     .catch(err =>console.log(err))
  //     .finally(() => setLoading(false))
  //   }
    
  
  // },[productosId])



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
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  ItemDetail  from '../../components/itemDetail/ItemDetail'
import { getFetch } from '../../data/getFetch'
import { stock } from '../../data/productos'

function ItemDetailContainer() {
    // const [stock, setStock] = useState({})
    // const [loading, setLoading] =useState(true)
    const {detalleId} = useParams()

    // useEffect(()=>{
    //     getFetch
    //     .then(resp =>setStock(resp.find(item => item.id === detalleId)))
    //     .cath(err =>console.log(err))
    //     .finally(() => setLoading(false))
    
    // },[])
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
            <ItemDetail key={detalleId} stock={stock}/>
            {/* <ItemDetail stock={stock} /> */}
        </>
    )
}

export default ItemDetailContainer
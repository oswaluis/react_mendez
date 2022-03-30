import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import { getFetchOne } from '../../data/getFetch'

import './ItemContainerList.css'

// definir una promesa recibe una funcion anonima, los nombres de los parametros son aleatorios
const tarea = new Promise((resolve, reject)=>{
    //acciones que queremos que se ejecuten
    let condicion = true 
    if (condicion){
        resolve('200 ok')//puedo devolver cualquier cosa 
    }else{
        reject('400 not found')
    }
})



function ItemContainerList(props) {

    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const {productosId} = useParams()
  
    useEffect(()=>{
    if(productosId){
        getFetchOne
        .then(resp =>setProducto(resp.filter(elem => elem.tipo === productosId)))
        .catch(err =>console.log(err))
        .finally(() => setLoading(false))
    }else{
        getFetchOne
        .then(resp =>setProducto(resp))
        .catch(err =>console.log(err))
        .finally(() => setLoading(false))
    }
    
    
    },[productosId])

    console.log(productosId)
    return (
        
        <div className='contenedor'>
        
            <ItemList producto= {producto} />
        </div>
    )
}

export default ItemContainerList


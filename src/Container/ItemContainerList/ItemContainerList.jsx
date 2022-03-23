import React from 'react'
import ItemCard from '../../components/ItemCard/ItemCard'
import ItemList from '../../components/ItemList/ItemList'

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



    return (
        
        <div className='contenedor'>
        
            <ItemList />
        </div>
    )
}

export default ItemContainerList


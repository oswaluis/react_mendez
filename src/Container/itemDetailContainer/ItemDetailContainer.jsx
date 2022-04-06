import { faHourglass2 } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  ItemDetail  from '../../components/itemDetail/ItemDetail'
import { getFetch } from '../../data/getFetch'


function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] =useState(true)
    const {detalleId} = useParams()

    useEffect(()=>{
        getFetch
        .then(resp =>setProducto(resp.find(item => item.id === detalleId)))
        .catch(err =>console.log(err))
        .finally(() => setLoading(false))
    
    },[])

    return (
        <>
            {loading ? <h2>Cargando...</h2> :<ItemDetail producto={producto} /> }
            
        </>
    )
}

export default ItemDetailContainer
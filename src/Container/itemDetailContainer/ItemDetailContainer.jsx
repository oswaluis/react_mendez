import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  ItemDetail  from '../../components/itemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'


function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] =useState(true)
    const {detalleId} = useParams()

    useEffect(()=>{
        const querydb = getFirestore()
        const queryProd = doc (querydb, 'productosDB', detalleId)

        getDoc(queryProd)
        .then(resp => setProducto ( { id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        } , [])

    return (
        <>
            {loading ? <h2>A la espera de tu producto...</h2> :<ItemDetail producto={producto} /> }
            
        </>
    )
}

export default ItemDetailContainer
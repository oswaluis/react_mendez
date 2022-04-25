import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import { collection,  getDocs, getFirestore, limit, query, where} from 'firebase/firestore'
import './ItemContainerList.css'


function ItemContainerList() {

    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true)
    const {productosId} = useParams()

    useEffect(()=>{
    
            const querydb = getFirestore()
            const queryCollection = collection(querydb, 'productosDB')
            const queryFilter = productosId ? query (queryCollection,
                                                where ('tipo', '==', productosId),
                                                limit(100)
                                                )
                                            :
                                            queryCollection

            getDocs(queryFilter)
            .then(resp => setProducto(resp.docs.map(item => ({id: item.id , ...item.data() } ))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
            } , [productosId])




    
    return (
        
        <div className='contenedor'>
        
            <ItemList producto= {producto} />
        </div>
    )
}

export default ItemContainerList


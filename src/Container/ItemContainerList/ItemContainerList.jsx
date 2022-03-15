import React from 'react'
import './ItemContainerList.css'

function ItemContainerList(props) {
    return (
        <div className='titulo'>
            <h1>{props.greeting}</h1>
            
        </div>
    )
}

export default ItemContainerList
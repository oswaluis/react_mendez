import React from 'react'
import { useState} from 'react'
import './ItemCount.css'

function ItemCount() {
    const inicio = 1;
    const stockProducto = 9;

    const [contador, setContador] = useState (inicio);
    const agg = (contador)=> {alert (`agregaste ${contador} al carrito`)}
    const agregarProducto = (num) =>{
        setContador(contador + num)
    }

    return(
        <div className='contenedorContador'>
            <div className='contenedorNum'>
                <span className='numProducto'>{contador}</span>
            </div>
            <div className='contenedorBoton'>
            <button className='botonContador' onClick={()=> agregarProducto(-1)} disabled={contador === inicio ? true : null}>
                -
            </button>
            <button className='botonContador' onClick={()=> agregarProducto(+1)} disabled={contador === stockProducto ? true : null}>+</button>
            </div>
            <div >
                <button className='btnAgg' onClick={() => agg(contador)}>agregar</button>
            </div>
        </div>
    )
}

export default ItemCount
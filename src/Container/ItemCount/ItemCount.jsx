import React from 'react'
import { useState} from 'react'
import { Link } from 'react-router-dom';
import './ItemCount.css'


function ItemCount({onAdd , producto}) {
    const [isOpen, setIsOpen] = useState(false)
    const inicio = 1;
    const  stockProducto =producto.stock;
    const [contador, setContador] = useState (inicio);
    // const agg = (contador)=> {alert (`agregaste ${contador} al carrito`)}
    const agregarProducto = (num) =>{
        setContador(contador + num)
    }
    const agg = ()=>{alert (`agregaste ${contador} al carrito`)
        onAdd(contador)
        setIsOpen(true)
    }

    return(
        <div className='contenedorContador'>
            <div className='contenedorNum'>
                <span className='numProducto'>{contador}</span>
            </div>
            <div className='contenedorBoton'>
            <button className='botonContador1' onClick={()=> agregarProducto(-1)} disabled={contador === inicio ? true : null}>
                -
            </button>
            <button className='botonContador1' onClick={()=> agregarProducto(+1)} disabled={contador === stockProducto ? true : null}>+</button>
            </div>
            {
            !isOpen ?(
                <div >
                    <button className='btnAgg' onClick={() => agg(contador)}>agregar</button>
                </div> 
                    ):
                    <>
                        <Link to= '/Cart'>
                            <button className="botonContador"
                                    onClick={()=>console.log("ir a Cart")}>
                                Ir al Carrito/ terminar compra
                            </button>
                        </Link>
                        <Link to= '/'>
                            <button className="botonContador2"
                                    >
                                Seguir comprando
                            </button>
                        </Link>
            
                    </>
            }
        
            {/* <Intercambiabilidad /> */}
        </div>
    )
}

export default ItemCount
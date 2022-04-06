import { Link } from "react-router-dom"
import {useState} from 'react'
import './ItemCount.css'

const EntradaContador = ()=> {
    return (
        <>
        <Link to= '/Cart'>
            <button className="botonContador"
                    onClick={()=>console.log("ir a Cart")}>
                Ir al Carrito/ terminar compra
            </button>
        </Link>
        <Link to= '/'>
            <button className="botonContador"
                    >
                Seguir comprando
            </button>
        </Link>
        
        </>
    
    )
}

const BotonContador = ({handleInter})=>{
    return(
        <button className="btnAgg"
                onClick={handleInter}>
            Agregar Al Carrito
        </button>
    )
}

const Intercambiabilidad = () => {
    const [inputType, setInputType] = useState('button')

    const handleInter = () =>{
        setInputType ('input')
    }
    return(
        <div>
          
            {
                inputType === 'button' ?
                <BotonContador handleInter={handleInter}/>
                :
                <EntradaContador/>
            }
        </div>
    )
}

export default Intercambiabilidad
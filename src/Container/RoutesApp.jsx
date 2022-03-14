import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { useState } from 'react';

function RoutesApp() {
    const [count, setCount] = useState(0)
    let condition = true
   // console.log(`El resultado de ${condition ? 'verdadero'  : 'falso' } `)
    
    const obj = {
    nombre : 'oswi',
    apellido : 'mendez'
    }
    //const nombre = obj.nombre
    //const apeliido = obj.apellido

    const {nombre , apellido} = obj // desestructuracion
    console.log (nombre)
    return (
    <>
        <NavBar/>

    </>
    );
}
export default RoutesApp
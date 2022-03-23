import React from 'react'
import './titulo.css'

function Titulo(props) {
  return (
    <div className='titulo'>
    <h1>{props.greeting}</h1></div>
  )
}

export default Titulo
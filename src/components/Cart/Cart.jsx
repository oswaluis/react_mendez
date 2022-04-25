import './cart.css'
import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

function Cart() {
  const [datosCliente, setDatosCliente] = useState ({email:'', name:'', phone:'', confirmarEmail:''})
  const [id, setId] = useState ('')
  const {cartList , removeCart,  precioTotal} = useCartContext()
  const [pagar, setPagar] = useState (false)


  const generarOrden= async (e)=>{
    e.preventDefault();

    let orden = {}
    orden.buyer = datosCliente
    orden.total = precioTotal ()
    
    orden.items= cartList.map(cartItem =>{
      const id = cartItem.id
      const nombre = cartItem.nombre
      const cantidad = cartItem.cantidad
      const precio = cartItem.precio 
      const subtotal = cartItem.precio*cartItem.cantidad

      return {id, nombre , precio, cantidad, subtotal}
    })
  
  
  const db = getFirestore()
  const queryCollection = collection(db, 'orders')
  await addDoc(queryCollection, orden)
  .then (resp => setId(resp.id))
  .catch(err => console.log (err))
  .finally(()=> console.log('finalizo'))




  const queryCollectionStock =  collection(db, 'productosDB')
  const queryActualizarStock = await query(
    queryCollectionStock,
    where(documentId(), 'in', cartList.map(elem=>elem.id))
  )

  const batch = writeBatch(db)
    await getDocs(queryActualizarStock)
    .then(resp => resp.docs.forEach(res =>batch.update(res.ref,{
      stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
    })))
  .finally(()=>console.log('actualizado'))
  batch.commit()
  }

  const handleChange = (e) => {
    setDatosCliente({ ...datosCliente, [e.target.name]:e.target.value})
  }
 

  return (

    <div>
      {cartList.length > 0 ? (
        <h2  className='textoFinalizar'>Termina tu compra</h2>
      )
    :
      (<>
        <h2 className='textoVacio'>El carrito esta vacio</h2>
          <Link to={'/'}>
            <button className='btnVacio'>Ver productos</button>
          </Link>
      </>)}

        <div>
          {cartList.length >0 &&
          cartList.map(prod => <CartItem key={prod.id} id={prod.id} nombre={prod.nombre} precio={prod.precio} cantidad={prod.cantidad}/>)}
        </div>

      {cartList.length > 0 &&
      <>
        <h2 className='textoTotal'>Total=${precioTotal()} </h2>
        <button  className='btnVaciar' onClick={removeCart} >Vaciar Carrito</button><br/>
        <button onClick={()=>{setPagar (true)}} className='btnPagar'> Ir a pagar</button>
      </>}
      <>
      {pagar &&
      <form onSubmit={generarOrden}>
      <input
        type='text'
        name='name'
        placeholder='nombre'
        errorMessage='Nombre debe tener solo entre 3 y 16 letras'
        value={datosCliente.name}
        onChange={handleChange}
        /><br/>
        
      <input
        type='number'
        name='phone'
        placeholder='telefono'
        value={datosCliente.phone}
        onChange={handleChange}
        /><br/>
      <input
        type='email'
        name='email'
        placeholder='email'
        value={datosCliente.email}
        onChange={handleChange}
        /><br/> 
      <input
        type='email'
        name='confirmarEmail'
        placeholder='repetir email'
        errorMessage='Los Email deben ser iguales'
        value={datosCliente.confirmarEmail}
        onChange={handleChange}
        pattern={datosCliente.email}
        required={true}
        /><br/> 
        
        <button> generar orden </button>
        <br />
        <>
      <span>{id.length !== '' && `el Id de su cumpra es: ${id}` }</span>
      </>
        
    </form> 
      } </> 
      
</div>


  )

    }




export default Cart
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext ([])

export const useCartContext = ()=>useContext(CartContext)

function CartContextProvider ({children}) { // children es la prop que permite react para darle props a los hijos
    const[cartList, setCartList] = useState([])
    
    const addToCart = (item) => {
        const revisarIndex = cartList.findIndex(prod => item.id === prod.id);
        if(revisarIndex !== -1){
            const nuevaCantidad = cartList[revisarIndex].cantidad + item.cantidad 
            const nuevoArray = cartList
            nuevoArray[revisarIndex].cantidad = nuevaCantidad
            setCartList([...nuevoArray])
        }else{
            setCartList([...cartList, item])
        }
    }

    const removeCart = () => {
        setCartList ([])
    }
    const precioTotal = ()=>{
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.precio), 0)
    }

    const cantidadTotalItem = () =>{
        return cartList.reduce((acum, prod) => acum += prod.cantidad , 0)
    }

    const eliminarItem = (id)=> {
    setCartList(cartList.filter( prod => prod.id !== id)) 
    }


















    // const [cantidadCart, setCantidadCart] = useState(0)
    // const [totalCart, setTotalCart] = useState()


    // useEffect(() => {
    //     let t = 0
    //     const total = cartList.map(p => p.precio*p.cantidad)
    //     total.map(p=> t = t+ p)
    //     setTotalCart(t)
    //     const totalitems = cartList.length
    //     setCantidadCart(totalitems)
    
    // }, [cartList])
    

    // // const addToCart = (item, id, contador) =>{
    // //     setCartList([...cartList,
    // //                     item
    // //                 ])
    // // }
    
    // const borrarCarrito = () => {
    //     setCartList([])
    //     setCantidadCart(0)
    // }

    // function existeItem(id){
    //     const elem = cartList.find (p => p.id === id)
    //     if(elem ===undefined){
    //         return false
    //     }else{
    //         return true
    //     }
    // }   
    // const precioTotal = ()=>{
    //     return cartList.reduce((acum,prod) => acum += prod.cantidad, 0)


    // }
    // const addToCart = ( id, contador,producto) =>{
    //     if (existeItem(id)){
    //         const productoExistente = cartList.find (p => p.id === id)
    //         const nuevaCantidad = productoExistente.cantidad + contador
    //         const nuevoProducto = {id:productoExistente.id, nombre:productoExistente.nombre, precio:productoExistente.precio , cantidad:nuevaCantidad}
    //         const carritoInicial = cartList.filter ( producto => producto.id =! id)
    //         const carritoFinal = [... carritoInicial , nuevoProducto]
    //         setCartList (carritoFinal)
    //     } else{
    //         const nuevoItem = { id:producto.id , nombre:producto.nombre , precio:producto.precio , cantidad:contador}
    //         setCartList([... cartList, nuevoItem])
    //     }
    // }
    // function elimnarItem(id){
    //     const nuevoCarrito = cartList.filter(producto => producto.id !==id)
    //     setCartList(nuevoCarrito)
    // }
    return(
        <CartContext.Provider 
            value={{
                cartList,
                addToCart,
                precioTotal,
                removeCart,
                cantidadTotalItem,
                eliminarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
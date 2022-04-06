import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext ([])

export const useCartContext = ()=>useContext(CartContext)

function CartContextProvider ({children}) { // children es la prop que permite react para darle props a los hijos
    const[cartList, setCartList] = useState([])
    const [cantidadCart, setCantidadCart] = useState(0)
    const [totalCart, setTotalCart] = useState()


    useEffect(() => {
        let t = 0
        const total = cartList.map(p => p.precio*p.cantidad)

        total.map(p=> t = t+ p)

        setTotalCart(t)

        const totalitems = cartList.length

        setCantidadCart(totalitems)
    
    }, [cartList])
    

    const addToCart = (item) =>{
        setCartList([...cartList,
                        item
                    ])
    }
    
    const borrarCarrito = () => {
        setCartList([])
        setCantidadCart(0)
    }

    function existeItem(id){
        const elem = cartList.find (p => p.id === id)
        if(elem ===undefined){
            return false
        }else{
            return true
        }
    }
    return(
        <CartContext.Provider 
            value={{
                cartList,
                cantidadCart,
                totalCart,
                addToCart,
                borrarCarrito,
                existeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
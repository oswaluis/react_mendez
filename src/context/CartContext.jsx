import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


const CartContext = createContext ([])

export const useCartContext = ()=>useContext(CartContext)

function CartContextProvider ({children}) {
    const[cartList, setCartList] = useState([])

    const addToCart = (item) =>{
        setCartList([...cartList,
                        item
                    ])
    }


    return(
        <CartContext.Provider value={{
            cartList,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{ faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import { useCartContext } from '../../context/CartContext'


function CartWidget() {
    const {cantidadCart} = useCartContext()
    return (
        <>
        < FontAwesomeIcon  className="icono"
            icon={faShoppingCart}
        />
        </>
      
    )
}

export default CartWidget

  
{/* <>
{cantidadCart > 0 &&
<>
< FontAwesomeIcon  className="icono"
    icon={faShoppingCart}/>
    <h4>{cantidadCart} </h4>
</>
}
</> */}
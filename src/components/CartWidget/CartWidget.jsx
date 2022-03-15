import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{ faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'


function CartWidget() {
    return (
        <>
        < FontAwesomeIcon  className="icono"
            icon={faShoppingCart}
        />
        </>
        
    )
}

export default CartWidget
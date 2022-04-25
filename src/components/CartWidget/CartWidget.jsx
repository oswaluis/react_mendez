import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{ faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import { useCartContext } from '../../context/CartContext'


function CartWidget() {
    const {cantidadTotalItem} = useCartContext()
    return (
        
        <>
        <span className='numeroCarr'>{cantidadTotalItem() !== 0 && `(${cantidadTotalItem()}) `}</span>
        
        < FontAwesomeIcon  className="icono"
            
            icon={faShoppingCart}
        />
        </>
    
    )
}

export default CartWidget

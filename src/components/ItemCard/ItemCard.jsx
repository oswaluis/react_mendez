import { Link } from "react-router-dom"
import ItemCount from "../../Container/ItemCount/ItemCount"
import './ItemCard.css'
import { stock } from "../../data/productos"

function ItemCard({stock}) {
    return (
       <div className="productos">
        <div className="cartas container-fluid"  >
							<img src={stock.img} className="imgCard" alt="..."/>
							<div className="">
							<h5 className="">{stock.nombre}</h5>
							<p className="">{stock.tipo}</p>
							<Link to={`/detalle/${stock.id}`}
							id="botonCarr${cod}" className="btn btn-primary"> Detalle del producto
							</Link>
                            <ItemCount />
                            </div>  
		</div>
        </div>
    )
}

export default ItemCard
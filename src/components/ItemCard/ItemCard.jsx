import { Link } from "react-router-dom"

import './ItemCard.css'


function ItemCard({stock}) {
    return (
    <div className="productos">
        <div className="cartas container-fluid"  >
							<img src={stock.foto} className="imgCard" alt="..."/>
							<div className="descripcionCarta">
								<h5 className="tituloCarta">{stock.nombre}</h5>
								<p className="tipoCarta">{stock.tipo}</p>
								<Link to={`/detalle/${stock.id}`}
										id="botonCarr${cod}" className="botonDetalle"> Detalle del producto
								</Link>

                            </div>  
		</div>
        </div>
    )
}

export default ItemCard
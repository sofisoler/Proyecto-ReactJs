import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount"
import '../styles/ItemDetail.css'

const ItemDetail = ({producto}) => {
    
    const [ isInCount, setIsInCount ] = useState(true)
    const { agregarCarrito } = useCartContext()

    const onAdd = (cant) => {
        agregarCarrito({ ...producto, cantidad: cant})
        setIsInCount(false)
    }
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="detail__description col-6">
                    <img src={producto.image} className="detail__image"/>
                    <p className="detail__title">{producto.name}</p>
                    <p className="detail__price">${producto.price}</p>
                </div>
                <div className="col-6 detail__count">
                    <p className="m-5">{producto.description}</p>
                    {isInCount ? 
                        <ItemCount onAdd={onAdd} />
                    :
                        <>
                            <Link to={'/cart'}>
                                <button className="detail__btn">Ir al carrito</button>
                            </Link>
                            <Link to={'/'}>
                                <button className="detail__btn">Seguir comprando</button>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
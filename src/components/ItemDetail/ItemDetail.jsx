import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {
    
    const [ isInCount, setIsInCount ] = useState(true)
    const { agregarCarrito } = useCartContext()

    const onAdd = (cant) => {
        console.log(cant);
        agregarCarrito({ ...producto, cantidad: cant})
        setIsInCount(false)
    }
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src={producto.image} className="w-50"/>
                    <h2>Nombre: {producto.name}</h2>
                    <p>Categoria: {producto.category}</p>
                    <p>Precio: {producto.price}</p>
                </div>
                <div className="col-6">
                    {isInCount ? 
                        <ItemCount onAdd={onAdd} />
                    :
                        <>
                            <Link to={'/cart'}>
                                <button className="btn btn-outline-secondary">Ir al carrito</button>
                            </Link>
                            <Link to={'/'}>
                                <button className="btn btn-outline-secondary">Seguir comprando</button>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
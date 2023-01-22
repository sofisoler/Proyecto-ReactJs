import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {
    const onAdd = (cant) => {
        console.log(cant);
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
                    <ItemCount onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
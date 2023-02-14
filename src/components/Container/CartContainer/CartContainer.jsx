import { useCartContext } from "../../../context/CartContext"

const CartContainer = () => {

  const { cartList, vaciarCarrito, precioTotal, eliminarItem } = useCartContext()

  return (
    <div>
      { cartList.map(prod =>
        <div key={prod.id}>
          <img src={prod.image} className='w-25' />
          <label>Nombre: {prod.name}</label>
          <label> - Cantidad: {prod.cantidad} </label>
          <label> - Precio: {prod.price} </label>
          <button onClick = {() => eliminarItem (prod.id)}> X </button>
        </div>
      )}
      {precioTotal() !== 0 && <p>Precio total: {precioTotal()}</p>}
      <button onClick={vaciarCarrito} className='btn btn-outline-danger'>Vaciar carrito</button>
    </div>
  )
}

export default CartContainer
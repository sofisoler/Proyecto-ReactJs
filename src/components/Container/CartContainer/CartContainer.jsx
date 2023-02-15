import { useCartContext } from "../../../context/CartContext"
import '../../styles/CartContainer.css'

const CartContainer = () => {

  const { cartList, vaciarCarrito, precioTotal, eliminarItem } = useCartContext()

  return (
    <div className="cart-container mt-5">
      { cartList.map(prod =>
        <div key={prod.id} className="w-100 ms-5">
          <img src={prod.image} />
          <label>{prod.name}</label>
          <label>Cantidad: {prod.cantidad} </label>
          <label>Precio: ${prod.price} </label>
          <button className="cart-container__btn" onClick = {() => eliminarItem (prod.id)}> X </button>
        </div>
      )}
      {precioTotal() !== 0 && <p className="mt-3">Precio total: ${precioTotal()}</p>}
      <button onClick={vaciarCarrito} className='btn btn-outline-danger'>Vaciar carrito</button>
    </div>
  )
}

export default CartContainer
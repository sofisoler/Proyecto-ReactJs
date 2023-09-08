import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
import "../../styles/CartContainer.css";

const CartContainer = () => {
  
  const { cartList, vaciarCarrito, precioTotal, eliminarItem } = useCartContext();

  return (
    <div className="cart-container mt-5">
      {cartList.length > 0 ? (
        <>
          {cartList.map((prod) => (
            <div key={prod.id} className="w-100 ms-5">
              <img src={prod.image} alt={prod.name} />
              <label className="cart-container__name">{prod.name}</label>
              <label>Cantidad: {prod.cantidad} </label>
              <label>Precio: ${prod.price} </label>
              <button
                className="cart-container__btn"
                onClick={() => eliminarItem(prod.id)}
              >
                X
              </button>
            </div>
          ))}
          {precioTotal() !== 0 && (
            <p className="mt-3">Precio total: ${precioTotal()}</p>
          )}
          <Link to={"/order"}>
            <button type="submit" className="btn btn-outline-success">
              Generar Orden
            </button>
          </Link>
          <button onClick={vaciarCarrito} className="btn btn-outline-danger mt-2">
            Vaciar carrito
          </button>
        </>
      ) : (
        <>
          <p>No hay productos en el carrito</p>
          <Link to={"/"}>
            <button className="detail__btn">Seguir explorando</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartContainer;
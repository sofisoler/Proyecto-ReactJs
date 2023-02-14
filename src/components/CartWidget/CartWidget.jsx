import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {
    const {cantidadTotal} = useCartContext()
    return (
        <div style={{color:"black"}}>
            {cantidadTotal() !== 0 && cantidadTotal()}
            <img src="/cart.svg" alt="carrito"/>
        </div>
    )
}

export default CartWidget
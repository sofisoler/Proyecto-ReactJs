import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {
    const {cantidadTotal} = useCartContext()
    return (
        <div>
            <img src="/cart.svg" alt="carrito"/>
            {cantidadTotal() !== 0 && cantidadTotal()}
        </div>
    )
}

export default CartWidget
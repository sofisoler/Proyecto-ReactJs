import { useState } from "react"
import '../styles/ItemCount.css'

const ItemCount = ({initial=1, stock=10, onAdd}) => {

    const [ count, setCount ] = useState(initial)

    const handleSuma = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const handleResta = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    }

    const handleOnAdd = () => {
        onAdd(count)
    }

    return (
        <div className="card">
            <div className="card-body row">
                <div className="col">
                    <button className="count__btn w-100" onClick={handleResta}> - </button>
                </div>
                <div className="col">
                    <center>
                        <label>{count}</label>
                    </center>
                </div>
                <div className="col">
                    <button className="count__btn w-100" onClick={handleSuma}> + </button>
                </div>
            </div>
            <div className="card-footer">
                <button className="count__btn w-100" onClick={handleOnAdd}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount
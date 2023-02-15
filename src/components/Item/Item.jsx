import { Link } from "react-router-dom"
import '../styles/Item.css'

const Item = ({producto}) => {
  return (
    <div className='col-4 p-2 mt-5'>
        <div key={producto.id} className='card p-2 text-center shadow'>
            <div className='card-head'>
                {producto.name}
            </div>
            <div className='card-body'>
                <img src={producto.image} className='w-50' />
                <p className="card__price">${producto.price}</p>
            </div>
            <div className='card-footer'>
                <Link to={`/detail/${producto.id}`}>
                    <button className='card__btn w-100'>Ir a Detalle</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Item
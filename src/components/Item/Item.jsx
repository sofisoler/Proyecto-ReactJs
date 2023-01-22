import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <div className='col-4 p-2 mt-5'>
        <div key={producto.id} className='card w-100 text-center shadow'>
            <div className='card-head'>
                {producto.name}
            </div>
            <div className='card-body'>
                <img src={producto.image} className='w-50' />
                <h6>Precio: {producto.price}</h6>
            </div>
            <div className='card-footer'>
                <Link to={`/detail/${producto.id}`}>
                    <button className='btn btn-outline-dark w-100'>Ir a Detalle</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Item
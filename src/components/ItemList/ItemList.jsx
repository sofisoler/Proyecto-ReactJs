import Item from "../Item/Item"
import '../styles/ItemList.css'

const ItemList = ({productos}) => {
  return (
    <div className="list">
      {
        productos.map( producto => <Item key={producto.key} producto={producto} />) 
      }
    </div>
  )
}

export default ItemList
import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div style={
      {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }
    }>
      {
        productos.map( producto => <Item key={producto.key} producto={producto} />) 
      }
    </div>
  )
}

export default ItemList
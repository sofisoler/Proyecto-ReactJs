import Item from "../Item/Item";
import "../styles/ItemList.css";

const ItemList = ({ productos }) => {
  
  return (
    <div className="list">
      {productos.map((producto) => (
        <div key={producto.key} className="item">
          <Item producto={producto} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
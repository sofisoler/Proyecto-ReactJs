import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../../utils/gFetch"
import ItemDetail from "../../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {detaliId} = useParams()

    useEffect(()=>{
        gFetch(detaliId)
        .then(resp=>setProducto(resp))
    }, [])
    return (
        <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer
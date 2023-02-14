import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {detaliId} = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', detaliId)
        getDoc(queryDoc)
        .then(results => setProducto({id: results.id, ...results.data()}))
        .catch(err => console.error(err))
    }, [])
    return (
        <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer
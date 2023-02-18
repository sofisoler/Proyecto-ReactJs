import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../ItemDetail/ItemDetail"
import Loader from "../../Loader/Loader"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {detaliId} = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', detaliId)
        getDoc(queryDoc)
        .then(results => setProducto({id: results.id, ...results.data()}))
        .catch(err => console.error(err))
        .finally(()=> setLoading(false))  
    }, [])
    
    return (
        <div className='container'>
            {   loading 
                ? 
                    <Loader />
                :
                    <ItemDetail producto={producto} />
            }
        </div>
    )
}

export default ItemDetailContainer
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from "../../../components/ItemList/ItemList"
import Loader from "../../Loader/Loader"

export const ItemListContainer  = () => {

    const [productos, setProductos] = useState([]) 
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        const queryCollectionFilter = categoryId ? query(queryCollection, where('category', '==', categoryId)) : queryCollection
        getDocs(queryCollectionFilter)
        .then(respuestaPromesa => {       
            setProductos(respuestaPromesa.docs.map(prod => ({id: prod.id, ...prod.data()})))
            })        
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))  
    },[categoryId])

    return (
        <div className='container'>
            {   loading 
                ? 
                    <Loader />
                :
                    <ItemList productos={productos} />
            }
        </div>
    )
}
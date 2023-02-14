import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from "../../../components/ItemList/ItemList"

export const ItemListContainer  = () => {  
    const [productos, setProductos] = useState([]) 
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        if (categoryId) {
            
            const queryCollectionFilter = query(queryCollection, where('category', '==', categoryId))
            
            getDocs(queryCollectionFilter)
            .then(respuestaPromesa => {       
                setProductos(respuestaPromesa.docs.map(prod => ({id: prod.id, ...prod.data()})))
             })        
             .catch(err => console.log(err))
             .finally(()=> setLoading(false))  
        } else {    
            getDocs(queryCollection)
            .then(respuestaPromesa => {       
                setProductos(respuestaPromesa.docs.map(prod => ({id: prod.id, ...prod.data()})))
             })        
             .catch(err => console.log(err))
             .finally(()=> setLoading(false))  
        }
    },[categoryId])

    return (
        <div className='container'>
            {   loading 
                ? 
                    <center>
                        <h1>Cargando...</h1>
                    </center>
                :
                    <ItemList productos={productos} />
            }
        </div>
    )
}
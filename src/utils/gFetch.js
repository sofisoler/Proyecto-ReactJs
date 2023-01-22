let productos = [
    { id: '1', category: 'makeups', name: "Labial Líquido", price: 2000, image:'https://http2.mlstatic.com/D_NQ_NP_741342-MLA40243078405_122019-O.webp' },
    { id: '2', category: 'makeups', name: "Base Líquida", price: 5770, image: "https://http2.mlstatic.com/D_NQ_NP_852258-MLA45744618069_042021-O.webp" },
    { id: '3', category: 'makeups', name: "Máscara De Pestañas", price: 5710, image: "https://http2.mlstatic.com/D_NQ_NP_976171-MLA49898564147_052022-O.webp" },
    { id: '4', category: 'accessories', name: "Brochas", price: 8290, image:'https://http2.mlstatic.com/D_NQ_NP_799335-MLA43569917484_092020-O.webp' },
    { id: '5', category: 'accessories', name: "Esponjas", price: 2890, image:'https://http2.mlstatic.com/D_NQ_NP_792553-MLA43569730984_092020-O.webp' },
    { id: '6', category: 'accessories', name: "Arqueador", price: 2150, image:'https://http2.mlstatic.com/D_NQ_NP_923230-MLA46249431044_062021-O.webp' },
]

export const gFetch = (id)=>{
    return new Promise(( resolve, reject )=>{
        setTimeout(()=>{
            resolve(id ? productos.find(prod => prod.id === id) : productos)
        }, 1000)
    })
}
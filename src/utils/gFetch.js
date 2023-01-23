let productos = [
    { id: '1', category: 'makeups', name: "Labial Líquido", price: 2000, image: '/public/items/labial-matte-ink.jpg' },
    { id: '2', category: 'makeups', name: "Base Líquida", price: 5770, image: '/public/items/base.jpg' },
    { id: '3', category: 'makeups', name: "Máscara De Pestañas", price: 5710, image: '/public/items/mascara-de-pestañas.jpg' },
    { id: '4', category: 'makeups', name: "Labial Matte", price: 2500, image: '/public/items/labial-sensational.jpg' },
    { id: '5', category: 'makeups', name: "Paleta de Sombras", price: 4800, image: '/public/items/paleta-de-sombras.jpg' },
    { id: '6', category: 'accessories', name: "Set 5 Brochas", price: 8290, image:'/public/items/set-5-brochas.jpg' },
    { id: '7', category: 'accessories', name: "Set 2 Esponjas", price: 2890, image:'/public/items/set-2-esponjas.jpg' },
    { id: '8', category: 'accessories', name: "Arqueador", price: 2150, image:'/public/items/arqueador-de-pestañas.jpg' },
    { id: '9', category: 'accessories', name: "Kit perfilador", price: 3200, image:'/public/items/kit-perfilador-de-cejas.jpg' },
]

export const gFetch = (id)=>{
    return new Promise(( resolve, reject )=>{
        setTimeout(()=>{
            resolve(id ? productos.find(prod => prod.id === id) : productos)
        }, 1000)
    })
}
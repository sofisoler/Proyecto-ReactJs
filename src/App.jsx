import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemListContainer } from './components/Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Container/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/Container/CartContainer/CartContainer';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path='/' element={<ItemListContainer saludo={'En contrucción..'}  />} />
              <Route path='/category/:categoryId' element={<ItemListContainer saludo={'En contrucción..'}  />} />
              <Route path='/detail/:detaliId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartContainer />} />      
              <Route path='*' element={<Navigate to='/'/>} />      
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
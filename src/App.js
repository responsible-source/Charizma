import React from 'react';
import ShopcontextProvider from './components/Context/Shop-context'
import Header from './components/Front/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './components/Front/pages/Shop/Shop';
import Cart from './components/Front/pages/Cart/Cart';

const App = () => {
  return (
  
    <ShopcontextProvider>
    <Router>
            <Header />
            <Routes>
              <Route path='/' element={<Shop />} exact />
              <Route path='/cart' element={<Cart />} exact />
            </Routes>
    </Router>
    </ShopcontextProvider>
    
  )
}

export default App
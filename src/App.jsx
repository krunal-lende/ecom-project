import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Header from './components/body/Header'
import Footer from './components/body/Footer'

export const AppContext = createContext();

const App = () => {
  const[cart,setCart]=useState([]);
  const length = cart.length;
//  console.log(cart)
  return (
    <BrowserRouter>
    <AppContext.Provider value={{cart,setCart,length}}>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      
      <Route path='/products/:id' element={<Products />} />
    </Routes>
    
    <Footer >
    <p>© 2025 E-com project. </p>
    <h3>avoid copyright issues.</h3>
    </Footer>
      
    </AppContext.Provider>
    </BrowserRouter>
  )
}

export default App

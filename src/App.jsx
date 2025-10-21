import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className='site-root'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a-propos' element={<About />} />
        <Route path='/produits' element={<Products />} />
      </Routes>
      <Footer />
    </div>
  )
}

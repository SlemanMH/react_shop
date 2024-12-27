import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Categories from './components/categories/Categories'
import Products from './components/products/Products'
import Create from './components/create/Create'
import Show from './components/show/Show'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Details from './components/details/Details'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/products" element={<Products limit={15} />} />
      <Route path="/create" element={<Create />} />
      <Route path="/products/:id" element={<Details/>} />
      <Route path="/products/category/:category" element={<Show />} />
      <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

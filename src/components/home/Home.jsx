import React from 'react'
import Categories from '../categories/Categories'
import Products from '../products/Products'
import './Home.css'
export default function Home() {
  
  return (

    <>
      <div className='About py-5'>
        <div className="container">
          <h2 className='text-center'>About</h2>
          <p className='text-center'>
          A marketplace page represents a core feature of an online platform that supports the exchange of goods, services, or digital offerings. It serves as the primary space where participants (sellers and buyers) connect, discover items, and carry out transactions. The following is a summary of the essential components, capabilities, and design principles for a marketplace page</p>
        </div>
      </div>
      <Categories />
      <Products limit = {5}/>
    </>
  )
}

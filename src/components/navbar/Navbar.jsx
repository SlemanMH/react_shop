import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg  navbar-dark position-sticky top-0 left-0 ">
  <div className="container">
    <Link className="navbar-brand fs-3" to={'/'}>Shopping</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto fs-5">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/categories'} >Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/products'}>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/create'}>Create</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

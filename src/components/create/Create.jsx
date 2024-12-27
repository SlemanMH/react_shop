import React from 'react'
import './Create.css'
export default function Create() {
  return (
    <div className='create'>
    <div className='w-50 mx-auto p-5'>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Product Category</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Product Name</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Product Price</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Product Description</label>
   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" className="addBtn btn p-3">Add Product</button>
</form>
    </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import Loading from '../loading/Loading';
import useFetch from '../../assets/hooks/useFetch';
import './Categories.css';
import { Link } from 'react-router-dom';

export default function Categories() {
  const { data, error, isloading } = useFetch('https://dummyjson.com/products/categories');


  if (isloading) {
    return <Loading />
  }

  return (
    <>
      {error ? <div className='alert alert-danger'>{error}</div> : ''}
    <div className='categories'>
      <div className='container'>
      <div className='d-flex flex-wrap gap-5 p-5'>
      {data.map(category => (
        <div key={category.name} className='category text-center py-2'> 
          <h2>{category.name}</h2>
          <Link to={`/products/category/${category.name}`} >Details</Link>
        </div>
      ))}
      </div>
      </div>
      </div>
    </>
  )
}

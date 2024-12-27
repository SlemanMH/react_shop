import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../loading/Loading';
import useFetch from '../../assets/hooks/useFetch';
import './Products.css';
import { Link } from 'react-router-dom';


export default function Products({limit}) {


   const {data, error, isloading} = useFetch(`https://dummyjson.com/products?limit=${limit}`);

 
    if (isloading) {
       return <Loading />
    }

    return (
        <>
            {error ? <div className='alert alert-danger'>{error}</div> : ''}
          <div className='products'>
            <div className='d-flex flex-wrap gap-5 p-5'>
            {data.products.map(product => (
                <div key={product.id} className='product p-4'>
                    <img src={product.thumbnail} />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <Link to={`/products/${product.id}`}>Details</Link>
                </div>
            ))}
            </div>
            </div>
        </>
    )
}

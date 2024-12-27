import React from 'react'
import useFetch from '../../assets/hooks/useFetch';
import { Link, useParams } from 'react-router-dom';
import Loading from '../loading/Loading';

export default function Show() {
    const { category } = useParams();
 
    const { data, error, isloading } = useFetch(`https://dummyjson.com/products/category/${category}`);

    if (isloading) {
        return <Loading/>
    }
  return (
    <>
     {error ? <div className='alert alert-danger'>{error}</div> : ''}
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

    </>
    


  )
}

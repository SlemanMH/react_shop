import React from 'react'
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../loading/Loading';
import { useParams } from 'react-router-dom';
export default function Details() {

    const { id } = useParams();
    const { data, error, isloading } = useFetch(`https://dummyjson.com/products/${id}`);


    if (isloading) {
        return <Loading />
    }
    return (
        <>
            {error ? <div className='alert alert-danger'>{error}</div> : ''}
            <div className='details p-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='product-info'>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={data.thumbnail} className="card-img-top" />
                                <div className="card-body">
                                    <h2 className="card-title fs-4">{data.title}</h2>
                                    <h3 className='badge text-bg-secondary'>{data.category}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='product-details'>
                            <p className="card-text">{data.description}</p>
                            <h2>Product Images : </h2>
                            {data.images.map(img =>
                                <img src={img} className='w-25' />
                            )}
                            <p><span className='fw-bold'>Tags: </span> {data.tags.join(',')}</p>
                            <p><span className='fw-bold'>Price: </span> {data.price}$</p>
                            <p><span className='fw-bold'>Rating: </span> {data.rating}</p>
                        </div>
                    </div>
                </div>
                {data.reviews.map(review =>
                    <div className='review border rounded p-4 my-3'>
                        <p><span className='fw-bold'>Review Date : </span>{new Date(review.date).toLocaleDateString()} </p>
                        <p><span className='fw-bold'>Review Name : </span>{review.reviewerName} </p>
                        <p><span className='fw-bold'>Review Comment : </span>{review.comment} </p>
                    </div>
                )}
            </div>
            </div>
            

        </>
    )
}

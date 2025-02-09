import React from 'react'
import { useGetProductsDetailsQuery } from '../slices/productsApiSlice';
import { useParams } from 'react-router-dom' // useParams is a hook that allows you to access the URL parameters from a current route
// import { useEffect, useState } from 'react';
// import products from '../products.js'
import Nav from '../components/Nav';
import { Footer } from '../sections';
import Subscribe from '../sections/Subscribe';
import ProductDetail from '../sections/ProductDetail';
// import axios from 'axios';

const ProductDetailScreen = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get('/KickCart/api/products');
  //     console.log("data");
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  const {data: product, isLoading, error} = useGetProductsDetailsQuery(useParams().productId);
  return (
    <>
      <Nav />
      
      {isLoading ? (
        <h2 className='padding sm:py-16 py-8 px-8 font-montserrat text-coral-red text-center text-3xl font-bold'>Loading...</h2>
      ) : error ? (
        <div>
          <h2 className='text-red-600 text-3xl font-montserrat py-8 px-8 sm:py-16 padding'>Error</h2>
          <p>{error?.data?.message || error?.error || "An unexpected error occurred."}</p>
        </div>
      ) : (
        <>
          <section className='padding'>
            <ProductDetail product={product} />
          </section>
        </>
      )}
      

      <section className='padding'>
        <Subscribe />
      </section>

      <section className='bg-black padding'>
        <Footer />
      </section>
    </>
  )
}

export default ProductDetailScreen
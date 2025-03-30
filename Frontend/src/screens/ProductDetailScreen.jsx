import React from 'react'
import { useGetProductsDetailsQuery } from '../slices/productsApiSlice';
import { useParams } from 'react-router-dom' // useParams is a hook that allows you to access the URL parameters from a current route
// import { useEffect, useState } from 'react';
// import products from '../products.js'
import Nav from '../components/Nav';
import { Footer } from '../sections';
import Subscribe from '../sections/Subscribe';
import ProductDetail from '../sections/ProductDetail';
import Loader from '../components/Loader';
import Message from '../components/Message';
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
      {/* <Nav /> */}
      
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message className="padding" color="red" value={error?.data?.message || error?.error || "An unexpected error occurred."} />
        
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

      {/* <section className='bg-black padding'>
        <Footer />
      </section> */}
    </>
  )
}

export default ProductDetailScreen
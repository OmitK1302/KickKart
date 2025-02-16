import React from 'react';
import Nav from '../components/Nav.jsx';
import H_Products from '../sections/H_Products.jsx';
import Footer from '../sections/Footer.jsx';
import Subscribe from '../sections/Subscribe.jsx';
import { useGetProductsQuery } from '../slices/productsApiSlice.js';
import Loader from '../components/Loader.jsx';
import Message from '../components/Message.jsx';

const ProductScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  return(
    <>
      <Nav />

      {isLoading ? (
        <Loader />
      ) : 
      error ? (
        <section className='px-4 py-28'>
          <Message value={error?.data?.message || error?.error || "An unexpected error occurred."} />
        </section>
      ) : 
      (
        <section className='padding'>
          <H_Products products={products} />
        </section>
      )}

      
      <section className='padding'>
        <Subscribe />
      </section>

      <section className='bg-black padding'>
        <Footer />
      </section>

      
    </>

    

  );
};
export default ProductScreen;
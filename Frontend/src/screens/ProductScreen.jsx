import React from 'react';
import Nav from '../components/Nav.jsx';
import H_Products from '../sections/H_Products.jsx';
import Footer from '../sections/Footer.jsx';
import Subscribe from '../sections/Subscribe.jsx';
import { useGetProductsQuery } from '../slices/productsApiSlice.js';

const ProductScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  return(
    <>
      <Nav />

      {isLoading ? (
        <h2 className='padding sm:py-16 py-8 px-8 font-montserrat text-coral-red text-center text-3xl font-bold'>Loading...</h2>
      ) : 
      error ? (
        <div>
          <h2 className='text-red-600 text-3xl font-montserrat py-8 px-8 sm:py-16 padding'>Error</h2>
          <p>{error?.data?.message || error?.error || "An unexpected error occurred."}</p>
        </div>
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
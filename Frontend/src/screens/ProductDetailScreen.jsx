import React from 'react'
import { useParams } from 'react-router-dom' // useParams is a hook that allows you to access the URL parameters from a current route
import products from '../products.js'
import Nav from '../components/Nav';
import { Footer } from '../sections';
import Subscribe from '../sections/Subscribe';
import ProductDetail from '../sections/ProductDetail';

const ProductDetailScreen = () => {
  const {productId} = useParams();
  console.log(productId);
  const product = products.find((p) => p._id === productId); // find is a method that returns the value of the first element in the provided array that satisfies the condition specified in a callback function
  console.log(product);


  return (
    <div className='relative'>
      <Nav />

      <section className='padding'>
        <ProductDetail key={product._id} product={product}/>
      </section>

      <section className='padding'>
        <Subscribe />
      </section>

      <section className='bg-black padding'>
        <Footer />
      </section>
    </div>
  )
}

export default ProductDetailScreen
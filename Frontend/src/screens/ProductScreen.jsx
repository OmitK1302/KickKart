import React from 'react';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav.jsx';
import H_Products from '../sections/H_Products.jsx';
import Footer from '../sections/Footer.jsx';
import Subscribe from '../sections/Subscribe.jsx';
import axios from 'axios';
// import products from '../products.js'

const ProductScreen = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/KickCart/api/products');
      console.log("data");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <>
      <Nav />
      

      <section className='padding'>
        <H_Products products={products} />
      </section>

      <section className='padding'>
        <Subscribe />
      </section>

      <section className='bg-black padding'>
        <Footer />
      </section>
      
    </>
    
  )
}

export default ProductScreen
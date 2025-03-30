import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav'; // Import the Nav component
import Footer from '../sections/Footer'; // Import the Footer component

const Layout = () => {
  return (
    <>
      <Nav /> {/* Navbar appears on all pages */}
      <Outlet /> {/* This renders the active route's content */}
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer /> {/* Footer appears on all pages */}
      </section>
    </>
  );
};

export default Layout;

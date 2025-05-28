// src/Cancel.jsx
import React from 'react';
import BackButton from './BackButton';
import Navbar from './Navbar';
import Footer from './Footer';

const Cancel = () => (
    <>
    <Navbar/>
    <BackButton/>

    <div className="min-h-screen flex flex-col justify-center items-center bg-red-700 text-white p-6">
    <h1 className="text-4xl font-bold mb-4">Payment Cancelled</h1>
    <p className="text-lg">Your payment was not completed. Please try again.</p>
  </div>
  <Footer/>
  </>
  
);

export default Cancel;

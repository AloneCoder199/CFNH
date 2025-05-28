// src/Success.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Success = () => (
    <>
    <Navbar />
    <BackButton />
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-700 text-white p-6">
    <h1 className="text-4xl font-bold mb-4">Thank You for Your Donation! 🎉</h1>
    <p className="text-lg">Your payment was successful.</p>
  </div>
  <Footer/>
  </>
  
);

export default Success;

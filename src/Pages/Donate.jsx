// src/DonatePage.jsx
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import BackButton from '../Components/BackButton';

// Stripe publishable key
const stripePromise = loadStripe("pk_test_51RSztDRw56Pz7bT5c3hJiwSUs9BH19ajOuUl6JhOiPgR7aaxSi2qF7gFrxns2jnStZwDwCTgUYMRl0pHswUvX6Pv005gqDp4lW");
const DonatePage = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const handleDonate = async () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Amount',
        text: 'Please enter a valid donation amount (USD)',
        confirmButtonColor: '#8b5cf6',
        background: '#1f1c2c',
        color: '#fff',
      });
      return;
    }

    setLoading(true);

    try {
      const stripe = await stripePromise;

      // Update your backend URL here (local or deployed)
      const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(amount) * 1 }),
      });

      const session = await response.json();

      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        Swal.fire({
          icon: 'error',
          title: 'Payment Failed',
          text: result.error.message,
          confirmButtonColor: '#ef4444',
          background: '#1f1c2c',
          color: '#fff',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Something went wrong while processing the payment.',
        confirmButtonColor: '#ef4444',
        background: '#1f1c2c',
        color: '#fff',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <BackButton/>
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-black to-blue-300   flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-md text-white p-8 rounded-3xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-purple-400 mb-2 text-center">Support Us ❤️</h2>
        <p className="text-sm text-gray-200 mb-6 text-center">
          Your donation helps us continue our mission. Every dollar counts!
        </p>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount in USD"
          className="w-full px-4 py-3 text-lg text-white rounded-xl mb-6 outline-none focus:ring-2 focus:ring-purple-500"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDonate}
          disabled={loading}
          className={`w-full py-3 text-lg font-semibold rounded-xl shadow-lg transition duration-200 ${
            loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {loading ? "Processing..." : "Donate Now"}
        </motion.button>

        <p className="mt-4 text-xs text-center text-gray-300">
          100% Secure Payment via Stripe
        </p>
      </motion.div>
    </div>
    <Footer/>
    </>
  );
};

export default DonatePage;

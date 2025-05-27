// src/Pages/Donate.jsx
import React from "react";
import Navbar from "../Components/Navbar";
import BackButton from "../Components/BackButton";

const Donate = () => {
  return (
    <>
    <Navbar/> 
    <BackButton/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-400 to-pink-600 text-white p-8">
      <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Donate</h1>
      {/* <p className="max-w-xl text-center text-lg">
        Support our cause by making a donation. Every contribution counts!
        
      </p> */}
       <section className="bg-gradient-to-br from-blue-500 via-black to-blue-300 text-black py-12 px-6 text-center rounded-2xl shadow-2xl animate-pulse border-4 border-purple-500 max-w-2xl mx-auto my-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
        🚧 Donate Page Under Construction
      </h2>
<p className="text-lg md:text-xl font-medium text-gray-300 mb-6">
  This page is currently being developed by the <span className="text-purple-400 font-semibold">Alone Coder</span> company.
  The company was founded by <span className="text-green-400">Muhammad Bilal</span>,
  based in <span className="text-yellow-400">Samundri, Faisalabad</span>.
  <br />
  If you need a custom project, feel free to get in touch with us.
</p>


      <a
        href="https://wa.me/923219515138?text=hello%20sir%20i%20need%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-green-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-600 transition duration-300 glow-btn"
      >
        💬 Contact on WhatsApp
      </a>
    </section>
    </div>
    </>
  );
};

export default Donate;

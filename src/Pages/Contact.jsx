import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import BackButton from "../Components/BackButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const phoneNumber = "923219515138"; // ✅ Your WhatsApp number (without +)
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <BackButton />
      <section className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-blue-300 text-black px-4 py-16">
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-black"
          data-aos="fade-down"
        >
          Get in Touch With Us
        </h1>

        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-8 justify-between items-start ml-3 md:ml-0">
          {/* Left: Form Card */}
          <div
            className="w-full md:w-1/2 bg-gradient-to-br from-blue-500 via-black to-blue-300 text-white rounded-3xl p-10 shadow-xl border border-pink-500 hover:shadow-pink-400 transition duration-500 hover:scale-[1.02]"
            data-aos="fade-up-right"
          >
            <form onSubmit={handleWhatsAppSend}>
              <h2 className="text-2xl font-bold mb-6">📬 Send Us a Message</h2>

              <div className="mb-6">
                <label className="block text-lg font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-[#1e1e2f] text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
                />
              </div>

              <div className="mb-6">
                <label className="block text-lg font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-[#1e1e2f] text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
                />
              </div>

              <div className="mb-6">
                <label className="block text-lg font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-[#1e1e2f] text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full py-3 mt-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-lg rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/50"
              >
                🚀 Send Message via WhatsApp
              </button>
            </form>
          </div>

          {/* Right: Info Card */}
          <div
            className="w-full md:w-1/2 bg-gradient-to-tr from-purple-500 via-black to-pink-500 text-white rounded-3xl p-10 shadow-xl hover:shadow-purple-500/50 border border-white transition duration-500 hover:scale-[1.02]"
            data-aos="fade-up-left"
          >
            <h2 className="text-3xl font-bold mb-6">🤔 Why Contact Us?</h2>
            <ul className="space-y-4 text-lg">
              <li>📚 Would you like to help support a child's education?</li>
              <li>🍽️ Interested in donating food or daily essentials to families in need?</li>
              <li>🤝 Want to volunteer for our upcoming community welfare programs?</li>
              <li>💡 Have an idea or initiative that could improve someone's life?</li>
              <li>📞 Or just want to reach out and see how you can make a difference?</li>
            </ul>

            <p className="mt-6 text-md text-gray-200">
              We're here to help and collaborate. Send us your message and we'll get back to you as soon as possible!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

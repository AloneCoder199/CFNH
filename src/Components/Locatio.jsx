import React from "react";
import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section className="my-16 mx-auto max-w-5xl px-4">
      {/* Animated Section Heading */}
      <motion.h2
        className="text-4xl font-bold mb-8 text-center text-pink-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        Our Location
      </motion.h2>

      {/* Map Container with hover glowing effect */}
      <motion.div
        className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px 8px rgba(236, 72, 153, 0.7)",
          transition: { duration: 0.4 },
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        {/* Animated location label */}
        <motion.div
          className="absolute top-4 left-4 bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg select-none"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.8, duration: 0.5 } }}
        >
          📍 Our Office Location
        </motion.div>

        {/* Google Maps iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27341.26794017907!2d72.95506259999999!3d31.06360535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922f1aee1a4035f%3A0x1e765ba5546791d9!2sSamundri!5e0!3m2!1sen!2s!4v1748241028256!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location on Google Maps"
        ></iframe>
      </motion.div>
    </section>
  );
}

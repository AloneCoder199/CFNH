import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Certifcate from "../assets/Certifcate.webp"; // Replace with your certificate image path
export default function CertificateSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-center py-20 bg-gradient-to-br from-white to-gray-100">
      <motion.h2
        className="text-3xl font-bold text-purple-700 mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🛡️ Verified by Government
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-xl mx-auto px-4 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
       Our company is officially registered with the Government of Pakistan.
You can verify it yourself by viewing the certificate.
      </motion.p>

      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-500/50 transition-all duration-300 cursor-pointer"
      >
        📜 View Certificate
      </motion.button>

      {/* Certificate Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            {/* Modal */}
            <motion.div
              className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full text-center"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-700">📄 Official Government Certificate</h3>
              <img
                src={Certifcate} // replace with your certificate path
                alt="Company Certificate"
                className="rounded-lg shadow-md w-full max-h-[400px] object-contain"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

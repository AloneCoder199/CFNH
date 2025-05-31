import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, MessageCircle } from 'lucide-react';

const SiteNotice = () => {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full bg-yellow-50 border-b-2 border-yellow-300 px-4 py-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center text-yellow-900 text-sm sm:text-base font-medium z-50 shadow-md fixed top-0 left-0 right-0 sm:gap-4 sm:py-3 sm:rounded-b-lg sm:shadow-lg sm:bg-yellow-100"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div className="flex items-start sm:items-center gap-3 text-center sm:text-left flex-col sm:flex-row">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 0 0px #facc15',
              '0 0 15px #facc15',
              '0 0 0px #facc15',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="p-2 rounded-full bg-yellow-100"
        >
          <AlertTriangle className="text-yellow-600 w-5 h-5" />
        </motion.div>

        <div className="max-w-xl text-yellow-900">
  <p>
    This website has been professionally developed by <span className="font-bold text-purple-700">Alone Coder</span> (Muhmmad Bilal).
  </p>
  <p className="mt-1">
    Currently, the site is in <span className="text-red-600 font-semibold">limited access mode</span> as the full payment process is still pending from the client’s side.
  </p>
  <p className="mt-1">
    Once all remaining formalities are completed, the full version of the website will be unlocked. Thank you for your understanding and cooperation 🙏
  </p>
</div>

      </div>

      <a
        href="https://wa.me/923219515138?text=Hi%20Bilal%2C%20I%20want%20to%20discuss%20my%20website%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:scale-105"
      >
        <MessageCircle className="w-4 h-4" />
        Contact Developer
      </a>
    </motion.div>
  );
};

export default SiteNotice;

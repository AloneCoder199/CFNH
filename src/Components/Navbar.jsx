import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.webp';
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLeaf,
  FaHome,
  FaInfoCircle,
  FaHandsHelping,
  FaUsers,
  FaEnvelope,
  FaDonate,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  { name: "Home", to: "/", icon: <FaHome /> },
  { name: "About", to: "/about", icon: <FaInfoCircle /> },
  { name: "Contact", to: "/contact", icon: <FaEnvelope /> },
  { name: "Team", to: "/team", icon: <FaUsers /> },
  { name: "Mission", to: "/Missionpage", icon: <FaHandsHelping /> },
  { name: "Projects", to: "/Projects", icon: <FaHandsHelping /> },
  { name: "Donate", to: "/donate", icon: <FaDonate /> },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
      src={logo} 
      alt="Logo" 
      className="w-8 h-8 object-contain animate-pulse" 
    />
          <span className="text-xl font-bold text-blue-900 select-none animate-fade-in">Compassion ہمــــــدردی</span>
        </div>
        <nav className="hidden md:flex gap-8 font-semibold text-gray-700">
          {navItems.map(({ name, to, icon }) => (
            <NavLink
              key={name}
              to={to}
              end
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ease-in-out ${
                  isActive
                    ? " md:bg-gradient-to-r md:from-blue-400 md:to-purple-500 text-white shadow-lg"
                    : "hover:text-white hover:bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 hover:shadow-xl hover:scale-105"
                }`
              }
            >
              <span className="text-lg">{icon}</span> {name}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-2xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 transition-colors hover:bg-blue-100"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

     <AnimatePresence>
  {open && (
    <motion.nav
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={menuVariants}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      className="fixed top-0 left-0 h-screen w-70 bg-gradient-to-br from-blue-500 via-black to-blue-300 z-40 p-6 flex flex-col gap-6 md:hidden overflow-y-auto"
    >
      {navItems.map(({ name, to, icon }) => (
        <NavLink
          key={name}
          to={to}
          end
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-3 text-xl font-semibold p-3 rounded-md transition-all duration-300 ease-in-out ${
              isActive
                ? "text-yellow-300 bg-gradient-to-r from-purple-600 to-blue-600 shadow-inner"
                : "text-white hover:text-yellow-300 hover:bg-purple-700/40 hover:shadow-lg hover:scale-105"
            }`
          }
        >
          {icon} {name}
        </NavLink>
      ))}
    </motion.nav>
  )}
</AnimatePresence>


    </header>
  );
}

export default Navbar;

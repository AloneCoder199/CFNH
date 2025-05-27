import React from "react";
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaSchool, FaLeaf, FaPeopleCarry } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BackButton from "../Components/BackButton";
import { useNavigate } from "react-router-dom";
const projects = [
  {
    title: "Flood Relief Initiative",
    description:
      "We are actively helping 200+ families in flood-affected regions with food, shelter, and medical support.",
    icon: <FaHandHoldingHeart className="text-red-400 text-4xl" />,
    bg: "from-red-500 to-pink-500",
  },
  {
    title: "Education for All",
    description:
      "Currently sponsoring 50 underprivileged students by providing books, uniforms, and school fees.",
    icon: <FaSchool className="text-yellow-300 text-4xl" />,
    bg: "from-yellow-500 to-orange-500",
  },
  {
    title: "Tree Plantation Drive",
    description:
      "Over 10,000 trees planted this year in rural and urban areas to combat climate change.",
    icon: <FaLeaf className="text-green-400 text-4xl" />,
    bg: "from-green-500 to-emerald-600",
  },
  {
    title: "Empowering Women",
    description:
      "Helping 100+ women learn skills like tailoring, craft-making, and digital literacy.",
    icon: <FaPeopleCarry className="text-purple-300 text-4xl" />,
    bg: "from-purple-500 to-indigo-600",
  },
];
function ProjectsPage() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <BackButton/>
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-blue-300 py-12 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-black mb-12"
      >
        Our Active Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`bg-gradient-to-br from-blue-500 via-black to-blue-300 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-transform duration-300`}
          >
            <div className="mb-4 flex items-center gap-4">
              {project.icon}
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            </div>
            <p className="text-lg leading-relaxed text-white">{project.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 text-center"
      >
        <p className="text-xl text-black font-medium mb-4">
          Your support helps us expand these initiatives and reach more lives.
        </p>
        <button
      className=" cursor-pointer px-6 py-3 bg-gradient-to-r from-red-400 to-pink-600 text-white font-bold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      onClick={() => navigate("/donate")}
    >
      Donate Now
    </button>
      </motion.div>
    </div>
    <Footer/>
    </>
  );
}

export default ProjectsPage;

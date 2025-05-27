// src/Pages/About.jsx

import React from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import CertificateSection from "../Components/Certifate";
import LocationSection from "../Components/Locatio";
import Footer from "../Components/Footer";
import BackButton from "../Components/BackButton";
import emo from "../assets/emo.webp"; // Import your emotional image
const About = () => {

  return (
    <>
      <Navbar />
      <BackButton />
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 via-white to-blue-300 text-black py-16 px-4 sm:px-8">
        <h1 className="absolute text-[5rem] sm:text-[8rem] font-extrabold text-black/10 top-20 left-1/2 transform -translate-x-1/2 pointer-events-none select-none z-0">
          About
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-black to-pink-500 bg-clip-text text-transparent mb-6">
            Compassion for Nature and Humanity
          </h2>
          <p className="text-lg sm:text-xl text-black leading-relaxed max-w-3xl mx-auto">
            A heartfelt initiative to uplift every living being — humans, animals, and plants — through compassion, sustainability, and empowerment.
          </p>
        </motion.div>

        {/* Mission Section */}
       {/* Enhanced Mission Section with animation, gradient, and glowing hover */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
  className="mt-16 max-w-4xl mx-auto px-4 text-center"
>
  <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-6">
    🌟 Our Mission
  </h3>

  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl hover:shadow-pink-400/40 border border-white/30 hover:border-pink-500 transition-all duration-500 group"
  >
    <p className="text-lg sm:text-xl text-gray-800 leading-relaxed tracking-wide">
      Our mission is to <span className="text-pink-600 font-semibold group-hover:drop-shadow-glow transition-all duration-300">create a compassionate and sustainable world</span> where every living being—whether human, animal, or plant—can thrive.
      <br /><br />
      We strive to <span className="text-purple-600 font-semibold group-hover:drop-shadow-glow">protect nature</span>, <span className="text-blue-600 font-semibold group-hover:drop-shadow-glow">promote human rights</span>, and <span className="text-green-600 font-semibold group-hover:drop-shadow-glow">support underprivileged communities</span> by providing <strong className="text-black font-bold">clean water</strong>, <strong className="text-black font-bold">food</strong>, <strong className="text-black font-bold">free education</strong>, and <strong className="text-black font-bold">empowerment opportunities</strong>.
      <br /><br />
      Through <span className="italic text-indigo-600 group-hover:drop-shadow-glow">active volunteering</span> and <span className="italic text-rose-600 group-hover:drop-shadow-glow">generous donations</span>, we aim to bring <strong className="text-black font-bold underline decoration-pink-400 underline-offset-4">real change</strong> to lives and the environment.
    </p>
  </motion.div>
</motion.div>


        {/* Vision Section */}
        {/* Animated Vision Section with glowing hover and gradient effects */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
  className="mt-20 max-w-4xl mx-auto px-4 text-center"
>
  <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 mb-6">
    👁️ Our Vision
  </h3>

  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl hover:shadow-green-400/40 border border-white/30 hover:border-green-500 transition-all duration-500 group"
  >
    <p className="text-lg sm:text-xl text-gray-800 leading-relaxed tracking-wide">
      We envision a future where <span className="text-green-600 font-semibold group-hover:drop-shadow-glow transition-all duration-300">compassion leads every action</span>, where <strong className="text-black font-bold">clean air</strong>, <strong className="text-black font-bold">water</strong>, and <strong className="text-black font-bold">green spaces</strong> are accessible to all.
      <br /><br />
      A world where <span className="text-purple-600 font-semibold group-hover:drop-shadow-glow">every individual</span>—regardless of <span className="italic text-rose-600 group-hover:drop-shadow-glow">gender</span>, <span className="italic text-blue-600 group-hover:drop-shadow-glow">status</span>, or <span className="italic text-yellow-600 group-hover:drop-shadow-glow">background</span>—has <strong className="underline decoration-green-400 underline-offset-4 font-bold">equal opportunities</strong> to live, grow, and flourish.
      <br /><br />
      A world where <span className="text-teal-600 font-semibold group-hover:drop-shadow-glow">humanity and nature live in harmony</span>, and <strong className="text-red-600 font-extrabold">no one is left behind.</strong>
    </p>
  </motion.div>
</motion.div>


        {/* Values Section */}
       <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
  className="mt-24 px-4 text-center"
>
  <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 mb-12">
    💎 Our Values
  </h3>

  <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center max-w-6xl mx-auto">
    {[
      {
        title: "Compassion",
        desc: "We believe kindness has the power to heal the world.",
        color: "from-pink-400 to-red-500",
        icon: "❤️",
      },
      {
        title: "Equality",
        desc: "Every human being deserves equal rights and opportunities.",
        color: "from-blue-400 to-indigo-600",
        icon: "⚖️",
      },
      {
        title: "Sustainability",
        desc: "Our efforts aim to preserve the environment for future generations.",
        color: "from-green-400 to-lime-500",
        icon: "🌱",
      },
      {
        title: "Empowerment",
        desc: "Helping people stand on their own feet through education and support.",
        color: "from-yellow-400 to-orange-500",
        icon: "🚀",
      },
      {
        title: "Integrity",
        desc: "We remain transparent, honest, and committed in all that we do.",
        color: "from-gray-500 to-gray-700",
        icon: "🔍",
        scrollTrigger: true, // custom flag
      },
    ].map((value, index) => (
      <motion.li
        key={index}
        whileHover={{ scale: 1.05 }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        id={value.scrollTrigger ? "last-value" : ""}
        className={`group p-5 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg border-2 border-transparent hover:border-white hover:shadow-xl hover:drop-shadow-glow transition-all duration-500`}
      >
        <h4
          className={`text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${value.color}`}
        >
          {value.icon} {value.title}
        </h4>
        <p className="text-gray-800 group-hover:drop-shadow-glow">
          {value.desc}
        </p>
      </motion.li>
    ))}
  </ul>
</motion.div>


        {/* Work Highlights Section */}
        <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="mt-24 px-4 text-center"
>
  <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-12">
    🔍 Work Highlights
  </h3>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {[
      {
        icon: "🌱",
        title: "3,000+ Trees Planted",
        desc: "Across communities to restore green life.",
        color: "from-green-400 to-lime-500",
      },
      {
        icon: "🚰",
        title: "10+ Villages Provided Clean Water",
        desc: "Through water purification projects.",
        color: "from-blue-400 to-indigo-500",
      },
      {
        icon: "🍽️",
        title: "20,000+ Meals Delivered",
        desc: "To families in need through our food drive.",
        color: "from-yellow-400 to-orange-500",
      },
      {
        icon: "🧒",
        title: "800+ Children Enrolled",
        desc: "In free education programs to shape a better tomorrow.",
        color: "from-pink-400 to-red-500",
      },
      {
        icon: "🐾",
        title: "100+ Animals Rescued & Treated",
        desc: "Through our animal welfare outreach.",
        color: "from-purple-400 to-purple-700",
      },
      {
        icon: "👩‍🦱",
        title: "500+ Women Empowered",
        desc: "Through skills training and support.",
        color: "from-fuchsia-400 to-rose-500",
      },
      {
        icon: "🏙️",
        title: "5 Cities & 30+ Rural Areas",
        desc: "We reach diverse communities actively.",
        color: "from-slate-400 to-gray-700",
        scrollTrigger: true, // for optional scroll effect
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`group p-6 bg-white/80 border-2 border-transparent rounded-2xl shadow-md hover:shadow-xl hover:border-white hover:drop-shadow-glow transition-all duration-500`}
        id={item.scrollTrigger ? "scroll-target-highlight" : ""}
      >
        <h4
          className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}
        >
          {item.icon} {item.title}
        </h4>
        <p className="text-gray-700 mt-2 group-hover:drop-shadow-glow">
          {item.desc}
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>

<br />
<CertificateSection/>
        {/* Emotional Image Section */}
        <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="mt-24 max-w-5xl mx-auto text-center px-4"
>
  <motion.img
    src={emo}
    alt="Impact"
    loading="lazy"
    className=" rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700 border-4 border-transparent hover:border-pink-500 w-60  relative md:left-90 left-14"
    whileHover={{ rotate: 1 }}
  />

  <motion.h3 
    className="text-3xl font-extrabold text-pink-600 mt-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
    💖 A Tear that Changed Everything...
  </motion.h3>

  <motion.p
    className="mt-6 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
  >
    One cold evening, our team met a young girl named Areeba, walking barefoot in a rural village.
    Her eyes were filled with hope — not for toys or clothes, but for **a single notebook** to write her dreams in.
    That moment broke us. 
    <span className="text-pink-500 font-semibold">It wasn’t just a child asking for help — it was a soul knocking on the door of humanity.</span>
  </motion.p>

  <motion.p
    className="mt-4 text-gray-600 text-md italic"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.7 }}
  >
    Since then, we’ve delivered education, meals, and clean water to thousands like her — but millions still wait.
  </motion.p>

  <motion.button
  whileHover={{
    scale: 1.1,
    boxShadow: "0 0 15px #ec4899",
  }}
  className="mt-8 bg-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-500 hover:bg-pink-700 hover:text-white cursor-pointer"
  onClick={() => {
    window.location.href = "/donate";  // Yahan donate page ka link daalain
  }}
>
  💝 Help Us Change More Lives
</motion.button>


  <p className="mt-3 text-xs text-gray-400">Even the smallest donation can create the biggest impact.</p>
</motion.div>

<LocationSection/>

      </div>
       <Footer/>
    </>
  );
};

const Section = ({ title, content, contentComponent }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="mt-16 max-w-4xl mx-auto text-center"
  >
    <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4 bg-gradient-to-r from-blue-700 via-black to-pink-500 bg-clip-text ">
      {title}
    </h3>
    {contentComponent || <p className="text-lg text-black leading-relaxed">{content}</p>}
  </motion.div>
 
);

export default About;

// EmotionalSection.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const counters = [
  { icon: "💚", label: "Meals Served", end: 5000 },
  { icon: "🌳", label: "Trees Planted", end: 3200 },
  { icon: "👨‍👩‍👧", label: "Families Helped", end: 700 }
];

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 50);
          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(counter);
              start = end;
            }
            setCount(Math.floor(start));
          }, 50);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
};

const EmotionalSection = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-gradient-to-r from-blue-200 to-blue-400 text-black">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-center space-y-6"
      >
        <p className="text-lg md:text-xl italic font-medium max-w-xl mx-auto">
          "Ayesha was 7, hungry, and hopeless. Today she’s smiling because of you."
        </p>
        <img 
          src="./src/assets/ChatGPT Image May 25, 2025, 04_18_46 PM.png" 
          alt="Ayesha" 
          className="w-32 h-32 md:w-40 md:h-40 object-cover mx-auto rounded-full border-4 border-pink-400 shadow-xl" 
        />
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
          {counters.map((item, i) => {
            const [count, ref] = useCountUp(item.end);
            return (
              <motion.div 
                key={i} 
                ref={ref}
                whileHover={{ rotateY: 180, scale: 1.1 }} 
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white bg-opacity-70 backdrop-blur-lg px-6 py-5 rounded-2xl shadow-lg text-center w-52 h-40 perspective transform-style-preserve-3d"
                style={{ boxShadow: "0 10px 20px rgba(255, 105, 180, 0.3), 0 6px 6px rgba(0,0,0,0.2)" }}
              >
                <div className="text-3xl mb-2 animate-pulse drop-shadow-xl">{item.icon}</div>
                <div className="text-3xl font-extrabold text-pink-600 tracking-wide animate-fade-in">
                  {count.toLocaleString()}
                </div>
                <p className="text-gray-800 mt-1 text-sm font-medium tracking-tight">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default EmotionalSection;

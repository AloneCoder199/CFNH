// MissionSection.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const topics = [
  { title: "Compassion", icon: "❤️", description: "Compassion drives our mission to help others without expecting anything in return." },
  { title: "Nature", icon: "🌿", description: "Protecting and preserving nature for a sustainable future." },
  { title: "Clean Environment", icon: "🏞️", description: "We strive to create a pollution-free, eco-friendly world for all." },
  { title: "Clean Water", icon: "🚰", description: "Ensuring access to safe, clean drinking water for every community." },
  { title: "Animal Rights", icon: "🐾", description: "Protecting animals from cruelty and advocating for their welfare." },
  { title: "Growing Plants", icon: "🌱", description: "Encouraging tree plantation to fight climate change." },
  { title: "Humanity", icon: "🧑‍🤝‍🧑", description: "Serving humanity with love, care, and responsibility." },
  { title: "Free Education", icon: "📚", description: "Providing free education to empower children and communities." },
  { title: "Poverty", icon: "🥺", description: "Fighting poverty through sustainable support and donations." },
  { title: "Gender Equality", icon: "⚖️", description: "Promoting equal rights and opportunities for all genders." },
  { title: "Women Empowerment", icon: "💪", description: "Helping women build a stronger, independent future." },
  { title: "Food Delivery", icon: "🍱", description: "Delivering food to the needy and disaster-hit areas." },
  { title: "Helpers & Donors", icon: "🤲", description: "Honoring the kindness of donors and volunteers everywhere." }
];

const MissionSection = () => {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollSpeed = 0.3; // pixels per ms
    let isPaused = false;

    const step = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isPaused && container && hoveredIndex === null) {
        container.scrollLeft += delta * scrollSpeed;

        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0; // loop back
        }
      }

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    const handleUserScroll = () => {
      isPaused = true;
      clearTimeout(animationFrameRef.current);
      setTimeout(() => {
        isPaused = false;
      }, 1500); // pause for 1.5s after manual scroll
    };

    container.addEventListener("scroll", handleUserScroll);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      container.removeEventListener("scroll", handleUserScroll);
    };
  }, [hoveredIndex]);

  return (
    <section className="px-4 md:px-16 py-16 bg-white text-black text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="md:text-4xl text-3xl font-extrabold text-center text-gray-900"
      >
        Our Mission
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="mb-10 text-lg text-gray-700"
      >
        We believe in kindness. We believe in action.
      </motion.p>

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-scroll no-scrollbar py-6 scroll-smooth"
      >
        {topics.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative flex-shrink-0 w-64 h-64 cursor-pointer perspective"
          >
            <div
              className="group w-full h-full [transform-style:preserve-3d] transition-transform duration-700 relative"
              style={{
                transform: hoveredIndex === i ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full flex flex-col items-center justify-center rounded-2xl p-6 text-black shadow-xl backface-hidden"
                style={{
                  background: "linear-gradient(to right, #bfdbfe, #60a5fa)",
                }}
              >
                <div className="text-5xl mb-3 drop-shadow-md">{item.icon}</div>
                <h3 className="text-xl font-semibold drop-shadow">{item.title}</h3>
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full flex items-center justify-center p-4 text-sm text-center rotate-y-180 backface-hidden rounded-2xl text-black shadow-xl"
                style={{
                  background: "linear-gradient(to bottom, #bfdbfe, #60a5fa)",
                }}
              >
                <p>{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;














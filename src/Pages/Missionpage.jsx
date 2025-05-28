import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BackButton from "../Components/BackButton";
const missionPoints = [
  { icon: "❤️", title: "Compassion", description: "Spreading kindness and care to those who need it most." },
  { icon: "🌿", title: "Nature", description: "Protecting and preserving our natural world." },
  { icon: "💧", title: "Clean Water", description: "Providing access to safe and clean drinking water." },
  { icon: "🐾", title: "Animal Rights", description: "Protecting and advocating for the rights of animals." },
  { icon: "🌱", title: "Growing Plants", description: "Promoting greenery and sustainable environments." },
  { icon: "🤝", title: "Humanity", description: "Standing up for every human life with dignity and love." },
  { icon: "📚", title: "Free Education", description: "Making education accessible to every child, everywhere." },
  { icon: "🥣", title: "Poverty Relief", description: "Helping families escape the cycle of poverty." },
  { icon: "👩‍⚖️",title: "Gender Equality", description: "Ensuring equal rights and opportunities for all genders." },
  { icon: "👩‍🔧", title: "Women Empowerment", description: "Empowering women to lead, learn, and rise." },
  { icon: "🍱", title: "Food Delivery", description: "Providing meals to hungry families in need." },
  { icon: "🎁", title: "Be a Donor", description: "Join us in making a real difference in someone's life." },
];

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <BackButton/>
      <section className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-blue-300  py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-black" data-aos="fade-down">
          🌍 Our Mission
        </h1>
        <p className="text-lg md:text-xl max-w-3xl text-center mx-auto text-black mb-16" data-aos="fade-up">
          We are committed to building a better, kinder, and more sustainable world. Here’s how we’re making a difference:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-500 via-black to-blue-300  rounded-2xl p-6 shadow-xl border border-white/10 transition-transform transform hover:scale-105 hover:shadow-pink-500/50 hover:border-white/20"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-5xl mb-4 ">{point.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-white">{point.title}</h3>
              <p className="text-white">{point.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Mission;

// DonationOptions.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./src/components/ui/button";

const donations = [
  { title: 'Donate 1 Meal', price: 'Rs200' },
  { title: 'Sponsor a Tree', price: 'Rs300' },
  { title: 'Rebuild Home', price: 'Rs500' },
  { title: 'Support a Child Monthly', price: 'Rs1000' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring'
    }
  })
};

const DonationOptions = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 md:px-20 py-20 bg-gradient-to-br bg-white text-black">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12 text-center text-black drop-shadow-sm"
      >
        How You Can Help
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {donations.map((donation, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, rotateX: 3, rotateY: 3 }}
            className="rounded-2xl p-6 text-center bg-white shadow-lg border border-red-300 transition-all duration-300 hover:shadow-red-400 hover:ring-2 hover:ring-red-500 hover:ring-offset-2"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-400">{donation.title}</h3>
            <p className="text-lg font-bold mb-5 text-gray-800">{donation.price}</p>
            <Button
              variant="primary"
              className="bg-gradient-to-r from-red-400 to-red-300 hover:from-red-400 hover:to-red-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-transform duration-300 cursor-pointer"
              onClick={() => navigate('/donate')}
            >
              Donate Now
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DonationOptions;

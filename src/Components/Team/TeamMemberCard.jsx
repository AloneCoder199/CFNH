import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./card.css";  // We'll enhance this file

const TeamMemberCard = ({ member, index }) => {
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      className="card-container"
    >
      <div className="card">
        {/* Front Side */}
        <div className="card-front">
          <img src={member.image} alt={member.name} className="profile-img" />
          <h2 className={`transition-opacity duration-700 ${showName ? "opacity-100" : "opacity-0"}`}>
            {member.name}
          </h2>
          <p className="role-text">{member.role}</p>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <p className="email-text">{member.email}</p>
          <p className="about-text">{member.about}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;

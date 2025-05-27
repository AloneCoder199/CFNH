// TeamPage.jsx
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { teamMembers, volunteers } from "../Components/Team/teamData";
import TeamMemberCard from "../Components/Team/TeamMemberCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BackButton from "../Components/BackButton";

const TeamPage = () => {
  useEffect(() => {
    toast.success("Welcome to Our Team!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  }, []);

  const owner = teamMembers.find((m) => m.isOwner);
  const team = teamMembers.filter((m) => !m.isOwner);
  const volunteerList = volunteers;

  return (
    <>
      <Navbar />
      <BackButton />
      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-blue-300 text-black py-12 px-4 scroll-smooth">
        <ToastContainer />

        {/* Owner Section */}
        {owner && (
          <section className="text-center mb-20 relative">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 mb-2 animate-pulse">
              👑 Founder & Visionary
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10">
              Leading the path forward
            </p>
            <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-30">
              <h2 className="text-[80px] sm:text-[150px] md:text-[200px] lg:text-[280px] font-black bg-gradient-to-r from-green-300 via-blue-500 to-red-500 bg-clip-text text-transparent animate-glow">
                ہمــــــدردی
              </h2>
            </div>
            <div className="flex justify-center z-10 relative">
              <TeamMemberCard member={owner} index={0} />
            </div>
          </section>
        )}

        {/* Team Section */}
        <section className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-2">
            👨‍💼 Meet Our Professional Team
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 mb-10">
            Experts behind the mission
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            {team.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index + 1} />
            ))}
          </div>
        </section>

        {/* Volunteers Section */}
        <section className="text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-2">
            🤝 Our Volunteers
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 mb-10">
            Supportive members working passionately
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            {volunteerList.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index + 1} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;


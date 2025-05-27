import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Lightweight and modern icon set

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="md:hidden fixed top-23 left-4 z-50 flex items-center gap-2 px-4 py-2  bg-gradient-to-bl from-blue-500 via-black to-blue-300 rounded-full shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300"
    >
      <ArrowLeft className="w-5 h-5 animate-pulse text-white " />
    </button>
  );
};

export default BackButton;

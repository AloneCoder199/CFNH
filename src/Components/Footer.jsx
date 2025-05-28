// Footer.jsx
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 to-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Project Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/projects" className="hover:underline">Projects</a></li>
            <li><a href="/donate" className="hover:underline">Donate</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com/profile.php?id=61576335973237" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            {/* <a href="https://instagram.com/clientProfile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> */}
            <a href="https://www.youtube.com/@CompassionfornatureandHumanity" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://linkedin.com/in/clientProfile" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            {/* <a href="https://github.com/clientProfile" target="_blank" rel="noopener noreferrer"><FaGithub /></a> */}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Info</h3>
          <p className="text-sm">Email: compassionfornatureandhumanity@gmail.com</p>
          <p className="text-sm">Phone: +92 3338375445</p>
          <p className="text-sm">Phone: +92 3458636638</p>
          <p className="text-sm">Location: Samundri - FSD - Pakistan</p>
        </div>
        {/* Developer Branding */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">Developed By</h3>
          <p className="text-sm">🚀 <strong>Alone_Coder</strong></p>
          <p className="text-sm">Founder: <span className="font-bold text-red-400">Muhammad Bilal</span></p>
          <p className="text-sm">Location: Samundri</p>
          <a
            href="https://wa.me/923219515138?text=Hello%20Sir%20I%20Need%20A%20Project"
            className="inline-block mt-2 text-sm text-red-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Us For Your Project 🔥
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Compassion for Nature & Humanity. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

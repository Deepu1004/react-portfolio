import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`py-12 ${
        isDarkMode ? "bg-gray-900" : "bg-blue-100"
      } relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto px-4 text-center md:flex md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          <p
            className={`text-sm md:text-base font-medium ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } animate-fadeInUp`}
          >
            © {new Date().getFullYear()} Sai Deepak Varanasi. All rights
            reserved.
          </p>
        </div>
        <div className="flex justify-center space-x-4 md:justify-end">
          <a
            href="https://linkedin.com/in/saideepakvaranasi"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <FaLinkedin className="w-5 h-5 animate-bounceSlow" />
          </a>
          <a
            href="https://github.com/Deepu1004/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <FaGithub className="w-5 h-5 animate-bounceSlow" />
          </a>
          <a
            href="https://x.com/DeepuVaranasi"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <FaTwitter className="w-5 h-5 animate-bounceSlow" />
          </a>
          <a
            href="mailto:varanasisaideepak@gmail.com"
            className={`text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <FaEnvelope className="w-5 h-5 animate-bounceSlow" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

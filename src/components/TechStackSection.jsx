import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Code, Server } from "lucide-react";

// Define frontend skills
const frontendSkills = [
  {
    name: "ReactJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
];

// Define backend skills
const backendSkills = [
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "OpenCV",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
];

// Scrolling skills component
const ScrollingSkills = ({
  skills,
  direction = "left",
  speed = 25,
  category,
}) => {
  const { isDarkMode } = useTheme();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        {category === "frontend" ? (
          <Code
            size={16}
            className={isDarkMode ? "text-blue-400" : "text-blue-600"}
          />
        ) : (
          <Server
            size={16}
            className={isDarkMode ? "text-blue-400" : "text-blue-600"}
          />
        )}
        <h4
          className={`text-sm font-semibold ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {category === "frontend" ? "Frontend & Languages" : "Backend & Tools"}
        </h4>
      </div>

      <div className="overflow-x-auto overflow-hidden py-2 relative w-full">
        <motion.div
          className="flex items-center space-x-4 w-max"
          animate={
            !isSmallScreen
              ? { x: direction === "left" ? [0, -1920] : [-1920, 0] }
              : {}
          }
          transition={
            !isSmallScreen
              ? {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: speed,
                    ease: "linear",
                  },
                }
              : {}
          }
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              className={`flex-shrink-0 flex items-center p-3 rounded-lg ${
                isDarkMode
                  ? category === "frontend"
                    ? "bg-blue-900/30 hover:bg-blue-800/40"
                    : "bg-blue-900/30 hover:bg-blue-800/40"
                  : category === "frontend"
                  ? "bg-white hover:bg-blue-50"
                  : "bg-white hover:bg-purple-50"
              } shadow-md transition-all duration-300 hover:shadow-lg w-36 h-14`}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="w-8 h-8 overflow-hidden rounded-md flex items-center justify-center mr-3">
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/32";
                  }}
                />
              </div>
              <span
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Tech Stack Section Component
const TechStackSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      className={`p-6 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 to-indigo-50"
      }
        rounded-xl shadow-lg relative overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`absolute ${
              i % 2 === 0 ? "rounded-full" : "rounded-md rotate-45"
            } ${i % 3 === 0 ? "bg-blue-400" : "bg-purple-400"}`}
            style={{
              width: `${5 + Math.random() * 15}px`,
              height: `${5 + Math.random() * 15}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <h3
          className={`text-xl font-bold mb-3 ${
            isDarkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          <span className="text-blue-400">✦</span> My Tech Stack
        </h3>
        <p
          className={`mt-2 mb-6 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Explore the technologies and tools I use to craft exceptional digital
          experiences.
        </p>
      </div>

      <div
        className={`rounded-lg p-4 ${
          isDarkMode ? "bg-gray-800/50" : "bg-white/50"
        } backdrop-blur-sm shadow-inner`}
      >
        <ScrollingSkills
          skills={frontendSkills}
          direction="left"
          speed={30}
          category="frontend"
        />
        <ScrollingSkills
          skills={backendSkills}
          direction="right"
          speed={25}
          category="backend"
        />
      </div>
    </motion.div>
  );
};

export default TechStackSection;

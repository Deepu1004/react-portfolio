import React, { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import resume from "../../public/DeepuVaranasi.pdf";
import profileImageUrl from "/images/Image.jpeg";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { isDarkMode } = useTheme();
  const [particles, setParticles] = useState([]);

  // Generate random particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 10; i++) {
        newParticles.push({
          id: i,
          size: Math.random() * 6 + 3,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 15,
          duration: Math.random() * 10 + 10,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Animation variants for initial appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        mass: 1,
        delay: 0,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      scale: 1,
      boxShadow: isDarkMode
        ? "0px 4px 8px rgba(59, 130, 246, 0.2)"
        : "0px 4px 8px rgba(59, 130, 246, 0.1)",
      backgroundColor: isDarkMode
        ? "rgba(59, 130, 246, 0.9)"
        : "rgba(59, 130, 246, 0.8)",
    },
    hover: {
      scale: 1.08,
      boxShadow: isDarkMode
        ? "0px 15px 30px rgba(59, 130, 246, 0.4)"
        : "0px 15px 30px rgba(59, 130, 246, 0.3)",
      backgroundColor: "rgba(59, 130, 246, 1)",
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const outlineButtonVariants = {
    hidden: {
      scale: 1,
      boxShadow: isDarkMode
        ? "0px 4px 8px rgba(59, 130, 246, 0.2)"
        : "0px 4px 8px rgba(59, 130, 246, 0.1)",
      borderColor: isDarkMode
        ? "rgba(96, 165, 250, 0.8)"
        : "rgba(59, 130, 246, 0.8)",
      color: isDarkMode ? "rgba(96, 165, 250, 1)" : "rgba(59, 130, 246, 1)",
    },
    hover: {
      scale: 1.08,
      boxShadow: isDarkMode
        ? "0px 15px 30px rgba(59, 130, 246, 0.4)"
        : "0px 15px 30px rgba(59, 130, 246, 0.3)",
      borderColor: isDarkMode
        ? "rgba(96, 165, 250, 1)"
        : "rgba(59, 130, 246, 1)",
      color: isDarkMode ? "rgba(96, 165, 250, 1)" : "rgba(59, 130, 246, 1)",
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      id="home"
      className={`min-h-screen flex items-center justify-center ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-blue-50"
      } overflow-hidden relative`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full ${
            isDarkMode ? "bg-blue-400" : "bg-blue-400"
          } opacity-20 particle-animation`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              className={`inline-flex items-center px-6 py-3 ${
                isDarkMode
                  ? "bg-blue-900/30 text-blue-400"
                  : "bg-blue-100/50 text-blue-700"
              } rounded-full text-sm font-medium shadow-md hover:scale-105 transition-all`}
              variants={itemVariants}
            >
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Full Stack Developer
            </motion.div>
            <motion.h1
              className={`text-6xl md:text-7xl font-extrabold leading-tight tracking-tight ${
                isDarkMode ? "text-blue-100" : "text-blue-900"
              }`}
              variants={itemVariants}
            >
              Building{" "}
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isDarkMode
                    ? "from-blue-400 to-blue-300"
                    : "from-blue-600 to-blue-400"
                } animate-shimmer`}
              >
                Innovative
              </span>{" "}
              &{" "}
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isDarkMode
                    ? "from-blue-300 to-blue-400"
                    : "from-blue-400 to-blue-600"
                } animate-shimmer`}
              >
                Efficient
              </span>{" "}
              Solutions
            </motion.h1>
            <motion.p
              className={`text-lg ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed max-w-xl`}
              variants={itemVariants}
            >
              I am a passionate software developer who thrives on solving
              complex challenges through clean, efficient code. With a strong
              foundation in full-stack development and a love for competitive
              programming, I am always striving to deliver top-tier,
              high-performance applications.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                href={resume}
                download
                className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${
                  isDarkMode
                    ? "from-blue-500 to-blue-400"
                    : "from-blue-600 to-blue-500"
                } text-white rounded-xl shadow-lg font-medium`}
                variants={buttonVariants}
                whileHover="hover"
              >
                Download Resume
                <Download className="ml-2 transition-transform" size={20} />
              </motion.a>

              <motion.a
                href="#contact"
                className={`inline-flex items-center justify-center px-8 py-4 border-2 ${
                  isDarkMode
                    ? "border-blue-400 text-blue-400"
                    : "border-blue-600 text-blue-600"
                } rounded-xl shadow-lg font-medium group`}
                variants={outlineButtonVariants}
                whileHover="hover"
              >
                Get in Touch
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </motion.a>
            </div>
          </div>
          <motion.div className="relative" variants={imageVariants}>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                isDarkMode
                  ? "from-blue-500/20 to-transparent"
                  : "from-blue-600/20 to-transparent"
              } rounded-3xl transform rotate-6 scale-105 animate-pulse`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                isDarkMode
                  ? "from-blue-300/20 to-transparent"
                  : "from-blue-400/20 to-transparent"
              } rounded-3xl transform -rotate-6 scale-105 animate-pulse`}
            />
            <img
              src={profileImageUrl}
              alt="Profile"
              className="relative rounded-3xl shadow-2xl transform hover:scale-[1.1] transition-transform duration-300 w-full object-cover aspect-[4/5]"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

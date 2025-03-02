import React, { useEffect, useState } from "react";
import { Brain, GraduationCap, Code2, Trophy, Book } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { isDarkMode } = useTheme();
  const [particles, setParticles] = useState([]);

  // Generate random particles with slight movement
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
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
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const leftSectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const rightSectionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
      staggerChildren: { amount: 0.2 }, // Stagger the skill card animations
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const particleVariants = {
    start: {
      opacity: 0.3,
      scale: 1,
      x: 0,
      y: 0,
    },
    end: {
      opacity: 0.7,
      scale: 1.1,
      x: [0, 5, -5, 0],
      y: [0, -5, 5, 0],
      transition: {
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  // Hook to detect when sections are in view
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [leftRef, leftInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [rightRef, rightInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="about"
      className={`py-24 relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-900"
          : "bg-gradient-to-b from-white to-blue-100"
      }`}
    >
      {/* Floating particles with slight movement */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${
            isDarkMode ? "bg-blue-400" : "bg-blue-400"
          } particle-animation`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          initial="start"
          animate="end"
          variants={particleVariants}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with More Dynamic Animation */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-20"
        >
          <h2
            className={`text-5xl font-bold bg-gradient-to-r ${
              isDarkMode
                ? "from-blue-400 to-blue-300"
                : "from-blue-600 to-blue-400"
            } bg-clip-text text-transparent inline-block mt-4 py-1 mb-2 animate-shimmer`}
          >
            About Me
          </h2>
          <div className="mt-4 flex justify-center">
            <div
              className={`h-1 w-20 bg-gradient-to-r mr-4 ${
                isDarkMode
                  ? "from-blue-400 to-blue-300"
                  : "from-blue-600 to-blue-400"
              } rounded-full`}
            ></div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Section - About Me with Slide-In Animation */}
          <motion.div
            ref={leftRef}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            variants={leftSectionVariants}
          >
            <div
              className={`${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700"
                  : "bg-gradient-to-br from-white to-blue-50 border-blue-100"
              } rounded-2xl shadow-xl p-8 border hover:shadow-2xl transition-all duration-300`}
            >
              <div className="prose prose-lg">
                <h3
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-gray-100" : "text-gray-800"
                  } mb-6 flex items-center gap-2`}
                >
                  <Brain
                    className={`${
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    } animate-bounce`}
                    size={28}
                  />
                  My Journey
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  } mb-6 leading-relaxed`}
                >
                  Hi there! I'm a passionate software developer with a
                  deep-rooted love for technology and problem-solving. My
                  journey into coding began during my early school years when I
                  discovered the thrill of building things from scratch.
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  } leading-relaxed`}
                >
                  I specialize in full-stack development, combining technical
                  expertise with a user-first approach to create seamless
                  digital experiences. When I'm not coding, you can find me
                  experimenting with new technologies, contributing to
                  open-source projects, or enjoying a good cup of coffee while
                  brainstorming my next big idea.
                </p>
              </div>

              {/* Education Section */}
              <div className="mt-12">
                <h3
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-gray-100" : "text-gray-800"
                  } mb-6 flex items-center gap-2`}
                >
                  <GraduationCap
                    className={`${
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    } animate-pulse`}
                    size={28}
                  />
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-blue-600 before:to-blue-300">
                    <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-blue-600 animate-ping"></div>
                    <h4
                      className={`text-lg font-semibold ${
                        isDarkMode ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      Institute of Aeronautical Engineering
                    </h4>
                    <p
                      className={`${
                        isDarkMode ? "text-blue-400" : "text-blue-600"
                      } font-medium`}
                    >
                      B.Tech in Information Technology
                    </p>
                    <p
                      className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                    >
                      2022 - 2026
                    </p>
                    <p
                      className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                    >
                      CGPA: 8.75
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Skills with Slide-In and Staggered Animation */}
          <motion.div
            ref={rightRef}
            initial="hidden"
            animate={rightInView ? "visible" : "hidden"}
            variants={rightSectionVariants}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              variants={skillCardVariants}
              className="group col-span-2"
            >
              <div
                className={`p-8 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-gray-800 to-gray-900"
                    : "bg-gradient-to-br from-blue-50 to-white"
                } rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 transform hover:scale-105`}
              >
                <Code2
                  className={`${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  } mb-4 group-hover:animate-spin`}
                  size={36}
                />
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    isDarkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  Clean Code Advocate
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } leading-relaxed`}
                >
                  Writing clean, efficient, and maintainable code is at the core
                  of my development philosophy.
                </p>
              </div>
            </motion.div>

            <motion.div variants={skillCardVariants} className="group">
              <div
                className={`h-full p-8 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-gray-800 to-gray-900"
                    : "bg-gradient-to-br from-blue-50 to-white"
                } rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 transform hover:scale-105`}
              >
                <Trophy
                  className={`${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  } mb-4 group-hover:animate-bounce`}
                  size={36}
                />
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDarkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  Problem Solver
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } leading-relaxed`}
                >
                  I thrive on tackling complex challenges and finding creative
                  solutions.
                </p>
              </div>
            </motion.div>

            <motion.div variants={skillCardVariants} className="group">
              <div
                className={`h-full p-8 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-gray-800 to-gray-900"
                    : "bg-gradient-to-br from-blue-50 to-white"
                } rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 transform hover:scale-105`}
              >
                <Book
                  className={`${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  } mb-4 group-hover:animate-pulse`}
                  size={36}
                />
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDarkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  Continuous Learner
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } leading-relaxed`}
                >
                  Always exploring new technologies and expanding my skill set.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

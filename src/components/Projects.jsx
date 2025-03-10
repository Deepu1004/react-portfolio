import React, { useEffect, useRef, useState } from "react";
import {
  Github,
  ExternalLink,
  Sparkles,
  Code,
  Monitor,
  Cpu,
  Cloud,
  Smartphone,
  Webcam,
  Zap,
  ArrowRight,
  Eye,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  const categoryRefs = useRef([]);
  const headerRef = useRef(null);
  const [particles, setParticles] = useState([]);

  // Generate random particles with subtle movement
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

  // Group projects by category
  const projectCategories = [
    { id: "all", name: "All Projects", icon: <Sparkles className="w-4 h-4" /> },
    {
      id: "web",
      name: "Web Development",
      icon: <Monitor className="w-4 h-4" />,
    },
    { id: "ai", name: "AI & ML", icon: <Cpu className="w-4 h-4" /> },
    { id: "cv", name: "Computer Vision", icon: <Webcam className="w-4 h-4" /> },
  ];

  const projects = [
    {
      title: "ChronoSphere",
      description:
        "A responsive and user-friendly news aggregator built with Flask and web scraping techniques. It allows users to explore headlines from various popular news sources.",
      image: "projects/project-2.png",
      github: "https://github.com/Deepu1004/ChronoSphere",
      demo: "https://the-news-mania-nu.vercel.app/",
      tags: ["Flask", "Web Scraping", "BeautifulSoup4"],
      category: "web",
    },
    {
      title: "HyperOptiDetect-X",
      description:
        "HyperOptiDetect-X is an object detection tool using YOLOv10, enabling fast and accurate analysis of images and videos.",
      image: "projects/project-6.png",
      github: "https://github.com/Deepu1004/HyperOptiDetect-X",
      demo: "",
      tags: ["Python", "Flask", "YOLOv10", "Computer Vision"],
      category: "cv",
    },
    {
      title: "SketchEase",
      description:
        "SketchEase is a sleek online drawing tool with auto-save, dark mode, and grid display for seamless creativity. Powered by TLDraw, it offers an intuitive UI for effortless sketching and management.",
      image: "projects/sketch.png",
      github: "https://github.com/Deepu1004/ExceliDraw",
      demo: "https://exceli-draw.vercel.app/",
      tags: ["React JS", "Tailwind CSS", "TLDraw"],
      category: "web",
    },
    {
      title: "GesturaVision",
      description:
        "This GesturaVision Interface uses hand gestures to control your computer's mouse, offering intuitive navigation with real-time hand tracking.",
      image: "/projects/project-1.png",
      github: "https://github.com/Deepu1004/GesturaVision",
      demo: "",
      tags: ["Python", "OpenCV", "Computer Vision", "PyAutoGUI"],
      category: "cv",
    },
    {
      title: "J.A.R.V.I.S - Personal Assistant",
      description:
        "J.A.R.V.I.S is an intelligent voice and chat assistant designed for seamless interaction using voice or text commands.",
      image:
        "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&q=80&w=600",
      github:
        "https://github.com/Deepu1004/J.A.R.V.I.S-Personal-Assistant-with-GUI",
      demo: "",
      tags: ["Python", "Speech Recognition", "Tkinter (GUI)"],
      category: "ai",
    },
    {
      title: "HeroesDeck",
      description:
        "HeroesDeck is a Marvel superhero search engine that allows users to find detailed information about their favorite characters using the Marvel API.",
      image: "projects/project-4.png",
      github: "https://github.com/Deepu1004/Marvel-HeroesDeck",
      demo: "https://deepu1004.github.io/Marvel-HeroesDeck/",
      tags: ["HTML/CSS", "JavaScript", "Marvel API"],
      category: "web",
    },
    {
      title: "TicTacToe",
      description:
        "Tic-Tac-Toe: A Classic with Style offers a sleek, interactive experience with two game modes: player vs player and player vs AI.",
      image: "projects/project-7.png",
      github: "https://github.com/Deepu1004/Tic-Tac-Toe",
      demo: "https://deepu1004.github.io/Tic-Tac-Toe/",
      tags: ["HTML/CSS", "JavaScript"],
      category: "web",
    },
    {
      title: "Weather Forecast",
      description:
        "Weather-Forecast-App is a responsive app that provides real-time weather updates, showing temperature, humidity, wind speed, and conditions using the OpenWeatherMap API.",
      image: "projects/project-3.png",
      github: "https://github.com/Deepu1004/Weather-Forecast",
      demo: "https://deepu1004.github.io/Weather-Forecast/",
      tags: ["HTML/CSS", "JavaScript", "OpenWeather API"],
      category: "web",
    },
  ];

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );

    // Observe project cards
    if (projectRefs.current) {
      projectRefs.current.forEach((ref) => {
        if (ref) {
          ref.classList.add("animate-hidden");
          observer.observe(ref);
        }
      });
    }

    // Observe category buttons
    if (categoryRefs.current) {
      categoryRefs.current.forEach((ref) => {
        if (ref) {
          ref.classList.add("animate-hidden");
          observer.observe(ref);
        }
      });
    }

    // Observe section header
    if (headerRef.current) {
      headerRef.current.classList.add("animate-hidden");
      observer.observe(headerRef.current);
    }

    return () => {
      if (projectRefs.current) {
        projectRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
      if (categoryRefs.current) {
        categoryRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-24 ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-900"
          : "bg-gradient-to-b from-white to-blue-100"
      } overflow-hidden relative`}
    >
      {/* Floating particles with subtle movement */}
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
          variants={{
            start: { opacity: 0.3, scale: 1, x: 0, y: 0 },
            end: {
              opacity: 0.7,
              scale: 1.1,
              x: [0, 2, -2, 0],
              y: [0, -2, 2, 0],
              transition: {
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
            },
          }}
        />
      ))}

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 right-1/4 w-64 h-64 ${
            isDarkMode ? "bg-blue-900" : "bg-blue-100"
          } rounded-full opacity-20 blur-3xl animate-pulse`}
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className={`absolute bottom-1/3 left-1/3 w-80 h-80 ${
            isDarkMode ? "bg-blue-800" : "bg-blue-200"
          } rounded-full opacity-10 blur-3xl animate-float`}
          style={{ animationDelay: "1.2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16" ref={headerRef}>
          <h2
            className={`text-5xl font-bold bg-gradient-to-r ${
              isDarkMode
                ? "from-blue-400 to-blue-300"
                : "from-blue-600 to-blue-400"
            } bg-clip-text text-transparent inline-block mt-4 py-1 mb-2 animate-shimmer`}
          >
            My Work
          </h2>
          <br />
          <div
            className={`inline-flex items-center px-4 py-2 ${
              isDarkMode
                ? "bg-blue-900/50 text-blue-300"
                : "bg-blue-100/50 text-blue-700"
            } rounded-full text-sm font-medium mb-1 animate-fadeIn`}
            style={{ animationDelay: "0.3s" }}
          >
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Featured Projects
          </div>
          <div className="mt-4 flex justify-center">
            <div
              className={`h-1 w-20 bg-gradient-to-r ${
                isDarkMode
                  ? "from-blue-400 to-blue-300"
                  : "from-blue-600 to-blue-400"
              } rounded-full animate-scaleIn`}
              style={{ animationDelay: "0.9s" }}
            ></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category, index) => (
            <button
              key={category.id}
              ref={(el) => (categoryRefs.current[index] = el)}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-200 ${
                activeCategory === category.id
                  ? isDarkMode
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 scale-105"
                    : "bg-blue-600 text-white shadow-lg scale-105"
                  : isDarkMode
                  ? "bg-gray-800 text-blue-300 hover:bg-gray-700"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              } relative overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category.icon}
                <span>{category.name}</span>
              </span>
              {activeCategory === category.id && (
                <span
                  className={`absolute inset-0 ${
                    isDarkMode ? "bg-blue-500/20" : "bg-blue-500/20"
                  } animate-pulse rounded-full`}
                ></span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  ref={(el) => (projectRefs.current[index] = el)}
                  className={`rounded-2xl shadow-lg overflow-hidden ${
                    isDarkMode
                      ? "bg-gray-800/80 backdrop-blur-sm"
                      : "bg-white/80 backdrop-blur-sm"
                  } transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group glow card-3d`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden h-52">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <h3 className="text-xl font-bold text-white mb-2 transform translate-y-0 transition-transform duration-300">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 transform translate-y-0 transition-transform duration-300">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-blue-500/70 backdrop-blur-sm text-white rounded-full text-xs font-medium"
                            style={{ transitionDelay: `${tagIndex * 50}ms` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p
                      className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      } text-sm leading-relaxed mb-4`}
                    >
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${
                              isDarkMode
                                ? "text-blue-400 hover:text-blue-300"
                                : "text-blue-600 hover:text-blue-800"
                            } transition-colors duration-300 flex items-center gap-2 text-sm font-medium group-hover:animate-bounce`}
                            style={{ animationDelay: "0.2s" }}
                          >
                            <Github size={18} />
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Source
                            </span>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${
                              isDarkMode
                                ? "text-blue-400 hover:text-blue-300"
                                : "text-blue-600 hover:text-blue-800"
                            } transition-colors duration-300 flex items-center gap-2 text-sm font-medium group-hover:animate-bounce`}
                            style={{ animationDelay: "0.2s" }}
                          >
                            <ExternalLink size={18} />
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Live Demo
                            </span>
                          </a>
                        )}
                      </div>
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                          isDarkMode
                            ? "from-blue-400 to-blue-300"
                            : "from-blue-600 to-blue-400"
                        } opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse`}
                      />
                    </div>
                    <div
                      className={`mt-4 h-0.5 w-0 bg-gradient-to-r ${
                        isDarkMode
                          ? "from-blue-400 to-blue-300"
                          : "from-blue-600 to-blue-400"
                      } transition-all duration-300 group-hover:w-full rounded-full`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Empty state when no projects match the filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 animate-fadeIn">
            <div
              className={`inline-block p-4 ${
                isDarkMode ? "bg-gray-800" : "bg-blue-50"
              } rounded-full mb-4 animate-pulse`}
            >
              <Sparkles
                className={`w-8 h-8 ${
                  isDarkMode ? "text-blue-400" : "text-blue-500"
                }`}
              />
            </div>
            <h3
              className={`text-xl font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } mb-2`}
            >
              No projects in this category yet
            </h3>
            <p className={isDarkMode ? "text-gray-400" : "text-gray-500"}>
              Check back later or explore other categories
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

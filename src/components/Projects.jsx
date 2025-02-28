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
} from "lucide-react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  const categoryRefs = useRef([]);
  const headerRef = useRef(null);

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
      title: "GesturaVision",
      description:
        "This GesturaVision Interface uses hand gestures to control your computer's mouse, offering intuitive navigation with real-time hand tracking",
      image: "projects/project-1.png",
      github: "https://github.com/Deepu1004/GesturaVision",
      demo: "",
      tags: ["Python", "OpenCV", "Computer Vision", "PyAutoGUI"],
      category: "cv",
    },
    {
      title: "HeroesDek",
      description:
        "HeroesDek is a Marvel superhero search engine that allows users to find detailed information about their favorite characters using the Marvel API",
      image: "projects/project-4.png",
      github: "https://github.com/Deepu1004/Marvel-HeroesDek",
      demo: "https://deepu1004.github.io/Marvel-HeroesDek/",
      tags: ["HTML/CSS", "Javascript", "Marvel API"],
      category: "web",
    },
    {
      title: "TicTacToe",
      description:
        "Tic-Tac-Toe: A Classic with Style offers a sleek, interactive experience with two game modes: player vs player and player vs AI.",
      image: "projects/project-7.png",
      github: "https://github.com/Deepu1004/Tic-Tac-Toe",
      demo: "https://deepu1004.github.io/Tic-Tac-Toe/",
      tags: ["HTML/CSS", "Javascript"],
      category: "web",
    },
    {
      title: "Weather Forecast",
      description:
        "Weather-Forecast-App is a responsive app that provides real-time weather updates, showing temperature, humidity, wind speed, and conditions using the OpenWeatherMap API.",
      image: "projects/project-3.png",
      github: "https://github.com/Deepu1004/Weather-Forecast",
      demo: "https://deepu1004.github.io/Weather-Forecast/",
      tags: ["HTML/CSS", "Javascript", "OpenWeather API"],
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
      { threshold: 0.1 },
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
      className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-200 rounded-full opacity-10 blur-3xl animate-float"
          style={{ animationDelay: "1.2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="text-5xl font-bold py-1 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent inline-block mt-4 py-1 mb-2 animate-shimmer">
            My Work
          </h2>
          <br />
          <div
            className="inline-flex items-center px-4 py-2 bg-blue-100/50 rounded-full text-blue-700 text-sm font-medium mb-1 animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Featured Projects
          </div>
          <div className="mt-4 flex justify-center">
            <div
              className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full animate-scaleIn"
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
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category.icon}
              <span>{category.name}</span>
              {activeCategory === category.id && (
                <span className="absolute inset-0 rounded-full animate-pulse bg-blue-500/20"></span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="rounded-2xl shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group glow"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-52">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium"
                        style={{ transitionDelay: `${tagIndex * 50}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 transition-colors duration-300 flex items-center gap-2 text-sm font-medium hover:text-blue-800 group-hover:animate-bounce"
                        style={{ animationDelay: "0.1s" }}
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
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center gap-2 text-sm font-medium group-hover:animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <ExternalLink size={18} />
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Live Demo
                        </span>
                      </a>
                    )}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state when no projects match the filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 animate-fadeIn">
            <div className="inline-block p-4 bg-blue-50 rounded-full mb-4 animate-pulse">
              <Sparkles className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              No projects in this category yet
            </h3>
            <p className="text-gray-500">
              Check back later or explore other categories
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

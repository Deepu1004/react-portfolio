import React, { useRef, useState } from "react";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const projects = [
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
    },
    {
      title: "ChronoSphere",
      description:
        "A responsive and user-friendly news aggregator built with Flask and web scraping techniques. It allows users to explore headlines from various popular news sources.",
      image: "projects/project-2.png",
      github: "https://github.com/Deepu1004/ChronoSphere",
      demo: "https://the-news-mania-nu.vercel.app/",
      tags: ["Flask", "Web Scraping", "BeautifulSoup4"],
    },
    {
      title: "HyperOptiDetect-X",
      description:
        "HyperOptiDetect-X is an object detection tool using YOLOv10, enabling fast and accurate analysis of images and videos.",
      image: "projects/project-6.png",
      github: "https://github.com/Deepu1004/HyperOptiDetect-X",
      demo: "",
      tags: ["Python", "Flask", "YOLOv10", "Computer Vision"],
    },
    {
      title: "GesturaVision",
      description:
        "This GesturaVision Interface uses hand gestures to control your computer's mouse, offering intuitive navigation with real-time hand tracking",
      image: "projects/project-1.png",
      github: "https://github.com/Deepu1004/GesturaVision",
      demo: "",
      tags: ["Python", "OpenCV", "Computer Vision", "PyAutoGUI"],
    },
    {
      title: "HeroesDek",
      description:
        "HeroesDek is a Marvel superhero search engine that allows users to find detailed information about their favorite characters using the Marvel API",
      image: "projects/project-4.png",
      github: "https://github.com/Deepu1004/Marvel-HeroesDek",
      demo: "https://deepu1004.github.io/Marvel-HeroesDek/",
      tags: ["HTML/CSS", "Javascript", "Marvel API"],
    },
    {
      title: "TicTacToe",
      description:
        "Tic-Tac-Toe: A Classic with Style offers a sleek, interactive experience with two game modes: player vs player and player vs AI.",
      image: "projects/project-7.png",
      github: "https://github.com/Deepu1004/Tic-Tac-Toe",
      demo: "https://deepu1004.github.io/Tic-Tac-Toe/",
      tags: ["HTML/CSS", "Javascript"],
    },
    {
      title: "Weather Forecast",
      description:
        "Weather-Forecast-App is a responsive app that provides real-time weather updates, showing temperature, humidity, wind speed, and conditions using the OpenWeatherMap API.",
      image: "projects/project-3.png",
      github: "https://github.com/Deepu1004/Weather-Forecast",
      demo: "https://deepu1004.github.io/Weather-Forecast/",
      tags: ["HTML/CSS", "Javascript", "OpenWeather API"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent inline-block mt-4 py-1 mb-2">
            My Work
          </h2>
          <br />
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 rounded-full text-blue-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Featured Projects
          </div>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 pointer-events-none z-10" />

          <div className="flex items-center">
            <button
              onClick={scrollLeft}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 z-20 group"
            >
              <ChevronLeft
                className="text-blue-600 group-hover:scale-110 transition-transform duration-300"
                size={24}
              />
            </button>

            <div
              ref={containerRef}
              className="w-full overflow-x-auto scroll-smooth hide-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex space-x-6 px-8 py-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[400px] rounded-2xl shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative overflow-hidden h-52">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium"
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
                              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
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
                              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
                            >
                              <ExternalLink size={18} />
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Live Demo
                              </span>
                            </a>
                          )}
                        </div>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 z-20 group"
            >
              <ChevronRight
                className="text-blue-600 group-hover:scale-110 transition-transform duration-300"
                size={24}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

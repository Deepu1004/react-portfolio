import React, { useRef } from "react";
import { Github, ExternalLink, Code2, ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GesturaVision",
      description:
        "A virtual mouse using hand gestures, leveraging computer vision with Python and OpenCV.",
      image: "projects/project-1.png",
      github: "https://github.com/Deepu1004/GesturaVision",
      demo: "",
      tags: ["Python", "OpenCV", "Computer Vision"],
    },
    {
      title: "ChronoSphere",
      description:
        "A news aggregator that scrapes news from six top English news websites like CNN, BBC, AP, Times of India, etc.",
      image: "projects/project-2.png",
      github: "https://github.com/Deepu1004/ChronoSphere",
      demo: "https://the-news-mania-nu.vercel.app/",
      tags: ["React", "Node.js", "Web Scraping"],
    },
    {
      title: "HyperOptiDetect-X",
      description:
        "An object detection project that identifies various objects using YOLOv10 and the COCO dataset.",
      image: "projects/project-6.png",
      github: "https://github.com/Deepu1004/HyperOptiDetect-X",
      demo: "",
      tags: ["Python", "YOLOv10", "Computer Vision"],
    },
    {
      title: "J.A.R.V.I.S - Personal Assistant",
      description:
        "A voice and chat bot with a GUI interface, designed to assist users with various tasks.",
      image:
        "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&q=80&w=600",
      github:
        "https://github.com/Deepu1004/J.A.R.V.I.S-Personal-Assistant-with-GUI",
      demo: "",
      tags: ["Python", "NLP", "GUI"],
    },
  ];

  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.offsetWidth / 2;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.offsetWidth / 2;
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent inline-block">
            Projects
          </h2>
          <br />
          <br />
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 rounded-full text-blue-700 text-sm font-medium mb-4">
            <Code2 className="w-4 h-4 mr-2" />
            Featured Work
          </div>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center">
            {/* Left Button */}
            <button
              onClick={scrollLeft}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              style={{ zIndex: 10 }}
            >
              <ChevronLeft className="text-blue-600" size={32} />
            </button>

            {/* Projects Container */}
            <div
              ref={containerRef}
              className="w-full overflow-x-auto scroll-smooth"
            >
              <div className="flex space-x-6 px-6 py-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-96 rounded-xl shadow-lg overflow-hidden bg-white transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-2 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* Links will appear on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={scrollRight}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              style={{ zIndex: 10 }}
            >
              <ChevronRight className="text-blue-600" size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

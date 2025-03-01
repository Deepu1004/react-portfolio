import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  Database,
  Github as Git,
  Library,
  Languages,
  ExternalLink,
  Sparkles,
  Zap,
  Award,
  Cpu,
  Layers,
  Code,
  FileCode,
  Palette,
  Server,
  Braces,
  Boxes,
  Workflow,
  GitBranch,
  Table,
  BarChart,
  Sigma,
  Camera,
  Microscope,
} from "lucide-react";

const Skills = () => {
  const skillsRef = useRef(null);
  const profilesRef = useRef(null);
  const categoryRefs = useRef([]);
  const profileCardRefs = useRef([]);
  const particlesRef = useRef(null);
  const [particles, setParticles] = useState([]);

  // Generate random particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          size: Math.random() * 8 + 4,
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

    // Observe skill categories
    if (categoryRefs.current) {
      categoryRefs.current.forEach((ref) => {
        if (ref) {
          ref.classList.add("animate-hidden");
          observer.observe(ref);
        }
      });
    }

    // Observe profile cards
    if (profileCardRefs.current) {
      profileCardRefs.current.forEach((ref) => {
        if (ref) {
          ref.classList.add("animate-hidden");
          observer.observe(ref);
        }
      });
    }

    // Observe section headers
    if (skillsRef.current) {
      skillsRef.current.classList.add("animate-hidden");
      observer.observe(skillsRef.current);
    }

    if (profilesRef.current) {
      profilesRef.current.classList.add("animate-hidden");
      observer.observe(profilesRef.current);
    }

    return () => {
      if (categoryRefs.current) {
        categoryRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
      if (profileCardRefs.current) {
        profileCardRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (profilesRef.current) observer.unobserve(profilesRef.current);
    };
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      icon: <Languages className="w-8 h-8 text-blue-600" />,
      skills: [
        { name: "Java", icon: "/logos/java-logo.png" },
        { name: "Python", icon: "/logos/python-logo.png" },
        { name: "HTML", icon: "/logos/html-logo.png" },
        { name: "CSS", icon: "/logos/css-logo.png" },
        {
          name: "JavaScript",
          icon: "/logos/js-logo.png",
        },
      ],
    },
    {
      title: "Frameworks & Tools",
      icon: <Boxes className="w-8 h-8 text-blue-600" />,
      skills: [
        {
          name: "ReactJS",
          icon: "/logos/react-logo.png",
        },
        {
          name: "Tailwind CSS",
          icon: "/logos/tailwind-logo.png",
        },
      ],
    },
    {
      title: "Version Control",
      icon: <Git className="w-8 h-8 text-blue-600" />,
      skills: [
        { name: "Git", icon: "/logos/git-logo.png" },
        { name: "GitHub", icon: "/logos/github-logo.png" },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      skills: [{ name: "MySQL", icon: "/logos/mysql-logo.png" }],
    },
    {
      title: "Libraries",
      icon: <Library className="w-8 h-8 text-blue-600" />,
      skills: [
        {
          name: "Pandas",
          icon: "/logos/pandas-logo.png",
        },
        { name: "Numpy", icon: "/logos/numpy-logo.png" },
        { name: "PyTorch", icon: "/logos/pytorch-logo.png" },
        { name: "OpenCV", icon: "/logos/opencv-logo.png" },
      ],
    },
  ];

  const codingProfiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/DeepuVaranasi/",
      problems: "250+ Problems",
      rating: "1700+",
      icon: "/logos/leetcode-logo.png",
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/saideepak0402",
      problems: "150+ Problems",
      rating: "1700+",
      stars: "3★",
      icon: "/logos/codechef-logo.png",
      color: "from-blue-500 to-blue-300",
    },
    {
      name: "CodingNinjas",
      url: "https://www.naukri.com/code360/profile/DeepuVaranasi",
      problems: "150+ Problems",
      rating: "Ninja",
      icon: "/logos/coding-ninjas-logo.png",
      color: "from-blue-700 to-blue-500",
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/varanasisaideep1",
      problems: "180+ Problems",
      rating: "5★",
      icon: "/logos/hacker-rank-logo.webp",
      color: "from-blue-600 to-blue-400",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
      ref={particlesRef}
    >
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-blue-400 opacity-20 particle-animation"
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

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-2xl animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20" ref={skillsRef}>
          <h2 className="text-5xl font-bold py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-2 animate-shimmer">
            Skills & Expertise
          </h2>
          <div
            className="inline-flex items-center px-4 py-2 bg-blue-100/50 rounded-full text-blue-700 text-sm font-medium mb-2 animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Technical Proficiency
          </div>
          <div className="mt-2 flex justify-center">
            <div
              className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full animate-scaleIn"
              style={{ animationDelay: "0.9s" }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => (categoryRefs.current[index] = el)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 glow card-3d skill-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-3 bg-blue-50 rounded-lg animate-float group-hover:scale-110 transition-transform duration-300 skill-icon"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg p-3 flex items-center gap-2 group-hover:from-blue-100 group-hover:to-blue-200/50 transition-all duration-300 hover:scale-105"
                        style={{
                          animationDelay: `${(index * 5 + skillIndex) * 100}ms`,
                        }}
                      >
                        <div
                          className="flex-shrink-0 hover:animate-bounce scale-110"
                          style={{ animationDelay: `${skillIndex * 0.1}s` }}
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-5 h-5 object-contain"
                            style={{ animationDelay: `${skillIndex * 0.1}s` }}
                          />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Blue line positioned at the bottom */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        <div className="mt-32">
          <div className="text-center" ref={profilesRef}>
            <h2 className="text-5xl font-bold py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-2 animate-shimmer">
              Coding Profiles
            </h2>
            <div
              className="inline-flex items-center px-4 py-2 bg-blue-100/50 rounded-full text-blue-700 text-sm font-medium mb-3 animate-fadeIn"
              style={{ animationDelay: "0.3s" }}
            >
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              Problem Solving
            </div>
            <div className="flex justify-center">
              <div
                className="h-1 w-20 bg-gradient-to-r mb-10 mt-1 from-gray-600 to-gray-400 rounded-full animate-scaleIn"
                style={{ animationDelay: "0.9s" }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {codingProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                ref={(el) => (profileCardRefs.current[index] = el)}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 right-4 transform translate-y-2 opacity-50 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2 bg-blue-50 rounded-lg"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <img
                        src={profile.icon}
                        alt={`${profile.name} logo`}
                        className="w-8 h-8"
                      />
                    </div>
                    <h4 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                      {profile.name}
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {profile.name !== "CodeChef" && (
                      <div className="flex items-center justify-between bg-blue-50 rounded-lg px-3 py-2 transition-colors duration-300">
                        <span className="text-gray-600">Solved:</span>
                        <span className="font-semibold text-blue-600">
                          {profile.problems}
                        </span>
                      </div>
                    )}
                    {profile.name === "CodeChef" ? (
                      <>
                        <div className="flex items-center justify-between bg-blue-50 rounded-lg px-3 py-2 transition-colors duration-300">
                          <span className="text-gray-600">Stars:</span>
                          <span className="font-semibold text-blue-600">
                            {profile.stars}
                          </span>
                        </div>
                        <div className="flex items-center justify-between bg-blue-50 rounded-lg px-3 py-2 transition-colors duration-300">
                          <span className="text-gray-600">Rating:</span>
                          <span className="font-semibold text-blue-600">
                            {profile.rating}
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-between bg-blue-50 rounded-lg px-3 py-2 transition-colors duration-300">
                        <span className="text-gray-600">Rating:</span>
                        <span className="font-semibold text-blue-600">
                          {profile.rating}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Blue line positioned at the bottom */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500 group-hover:w-full"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

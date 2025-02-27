import React from "react";
import {
  Code2,
  Database,
  Github as Git,
  Library,
  Languages,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Languages className="w-8 h-8 text-blue-600" />,
      skills: [
        { name: "Java", image: "/logos/java-logo.png" },
        { name: "Python", image: "/logos/python-logo.svg" },
        { name: "HTML", image: "/logos/html-logo.png" },
        { name: "CSS", image: "/logos/css-logo.png" },
        { name: "JavaScript", image: "/logos/js-logo.png" },
      ],
    },
    {
      title: "Frameworks & Tools",
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      skills: [
        { name: "ReactJS", image: "/logos/react-logo.png" },
        { name: "Tailwind CSS", image: "/logos/tailwind-logo.png" },
      ],
    },
    {
      title: "Version Control",
      icon: <Git className="w-8 h-8 text-blue-600" />,
      skills: [
        { name: "Git", image: "/logos/git-logo.png" },
        { name: "GitHub", image: "/logos/github-logo.png" },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      skills: [{ name: "MySQL", image: "/logos/mysql-logo.png" }],
    },
    {
      title: "Libraries",
      icon: <Library className="w-8 h-8 text-blue-600" />,
      skills: [
        { name: "Pandas", image: "/logos/pandas-logo.png" },
        { name: "Numpy", image: "/logos/numpy-logo.png" },
        { name: "PyTorch", image: "/logos/pytorch-logo.png" },
        { name: "OpenCV", image: "/logos/opencv-logo.png" },
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
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/saideepak0402",
      problems: "150+ Problems",
      rating: "1700+",
      stars: "3★",
      icon: "/logos/codechef-logo.png",
    },
    {
      name: "CodingNinjas",
      url: "https://www.naukri.com/code360/profile/DeepuVaranasi",
      problems: "150+ Problems",
      rating: "Ninja",
      icon: "/logos/coding-ninjas-logo.png",
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/varanasisaideep1",
      problems: "180+ Problems",
      rating: "5★",
      icon: "/logos/hacker-rank-logo.webp",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-4">
            Skills & Expertise
          </h2>
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 rounded-full text-blue-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Technical Proficiency
          </div>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shine"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg float group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg p-3 flex items-center justify-center gap-2 group-hover:from-blue-100 group-hover:to-blue-200/50 transition-all duration-300 hover:scale-105"
                    >
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-5 h-5 object-contain"
                      />
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32">
          <div className="text-center">
            <h2 className="text-5xl font-bold py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-4">
              Coding Profiles
            </h2>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 rounded-full text-blue-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Problem Solving
            </div>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>{" "}
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shine"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {codingProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 right-4 transform translate-y-2 opacity-50 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg float">
                      <img
                        src={profile.icon}
                        alt={profile.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <h4 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                      {profile.name}
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {profile.name !== "CodeChef" && (
                      <div className="flex items-center justify-between bg-blue-50 rounded-lg px-3 py-2">
                        <span className="text-gray-600">Solved:</span>
                        <span className="font-semibold text-blue-600">
                          {profile.problems}
                        </span>
                      </div>
                    )}
                    {profile.name === "CodeChef" ? (
                      <>
                        <div className="flex items-center justify-between bg-blue-50 rounded-lg px-3 py-2">
                          <span className="text-gray-600">Stars:</span>
                          <span className="font-semibold text-blue-600">
                            {profile.stars}
                          </span>
                        </div>
                        <div className="flex items-center justify-between bg-blue-50 rounded-lg px-3 py-2">
                          <span className="text-gray-600">Rating:</span>
                          <span className="font-semibold text-blue-600">
                            {profile.rating}
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-between bg-blue-50 rounded-lg px-3 py-2">
                        <span className="text-gray-600">Rating:</span>
                        <span className="font-semibold text-blue-600">
                          {profile.rating}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 group-hover:w-full rounded-full"></div>
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

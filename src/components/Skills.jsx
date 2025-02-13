import React from "react";
import {
  Code2,
  Database,
  Github as Git,
  Library,
  Languages,
  ExternalLink,
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
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Skills & Expertise
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-blue-600">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-blue-50 rounded-lg p-3 flex items-center justify-center gap-2 group-hover:bg-blue-100 transition-colors duration-300"
                    >
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-4 h-4 object-contain"
                      />
                      <span className="text-gray-800 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-blue-600 mb-12">
            Coding Profiles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {codingProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative">
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="w-5 h-5 text-blue-600 opacity-50 transition-all duration-300 ease-out group-hover:scale-110 group-hover:opacity-100 group-hover:translate-y-[-2px]" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={profile.icon}
                      alt={profile.name}
                      className="w-8 h-8 object-contain"
                    />
                    <h4 className="text-xl font-bold text-blue-600">
                      {profile.name}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {profile.name !== "CodeChef" && (
                      <p className="text-gray-600">
                        Solved:{" "}
                        <span className="font-semibold text-gray-800">
                          {profile.problems}
                        </span>
                      </p>
                    )}
                    {profile.name === "CodeChef" ? (
                      <>
                        <p className="text-gray-600">
                          Stars:{" "}
                          <span className="font-semibold text-gray-800">
                            {profile.stars}
                          </span>
                        </p>
                        <p className="text-gray-600">
                          Rating:{" "}
                          <span className="font-semibold text-gray-800">
                            {profile.rating}
                          </span>
                        </p>
                      </>
                    ) : (
                      <p className="text-gray-600">
                        Rating:{" "}
                        <span className="font-semibold text-gray-800">
                          {profile.rating}
                        </span>
                      </p>
                    )}
                  </div>
                  <div className="mt-4 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
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

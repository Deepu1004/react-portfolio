import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
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
      skills: [
        { name: "ReactJS", image: "/logos/react-logo.png" },
        { name: "Tailwind CSS", image: "/logos/tailwind-css-logo.png" },
      ],
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", image: "/logos/git-logo.png" },
        { name: "GitHub", image: "/logos/github-logo.png" },
      ],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL", image: "/logos/mysql-logo.png" }],
    },
    {
      title: "Libraries",
      skills: [
        { name: "Pandas", image: "/logos/pandas-logo.png" },
        { name: "Numpy", image: "/logos/numpy-logo.png" },
        { name: "PyTorch", image: "/logos/pytorch-logo.png" },
        { name: "OpenCV", image: "/logos/opencv-logo.png" },
        
      ],
    },
  ];

  // Coding profile links
  const codingProfiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/DeepuVaranasi/",
      icon: "/logos/leetcode-logo.png",
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/saideepak0402",
      icon: "/logos/codechef-logo.png",
    },
    {
      name: "CodingNinjas",
      url: "https://www.naukri.com/code360/profile/DeepuVaranasi",
      icon: "/logos/coding-ninjas-logo.png",
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/varanasisaideep1",
      icon: "/logos/hacker-rank-logo.webp",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent inline-block">
            Skills & Expertise
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-center text-blue-700 mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center space-y-4 transform hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-16 h-16 object-contain rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                    <span className="text-md font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coding Profiles Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-8 text-blue-700">
            Check Out My Coding Profiles
          </h3>
          <div className="flex justify-center space-x-12">
            {codingProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-gray-800 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110"
              >
                <img
                  src={profile.icon}
                  alt={profile.name}
                  className="w-16 h-16 object-contain mb-4 transition-all duration-300 ease-in-out transform hover:scale-110 rounded-full shadow-md"
                />
                <span className="text-md font-semibold">{profile.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

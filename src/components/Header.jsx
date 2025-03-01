import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/60 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="relative group z-50">
            <span
            style={{cursor: "pointer"}} 
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-500 group-hover:via-blue-400 group-hover:to-blue-300">
              DV
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["home", "about", "projects", "skills", "contact"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeSection === section
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                    activeSection === section ? "after:w-full" : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ),
            )}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-6">
            {[
              {
                icon: Github,
                href: "https://github.com/Deepu1004",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/saideepakvaranasi/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:varanasisaideepak@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2"
                aria-label={label}
              >
                <span className="absolute -inset-2 rounded-full bg-blue-50 opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
                <Icon
                  size={20}
                  className="relative text-gray-600 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110"
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden relative w-10 h-10 flex items-center justify-center z-50 transition-all duration-300 rounded-full ${
              isMenuOpen ? "bg-blue-50" : "hover:bg-blue-50"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 transform transition-all duration-300 ${
                  isMenuOpen
                    ? "rotate-45 bg-blue-600"
                    : "-translate-y-1.5 bg-gray-600 group-hover:bg-blue-600"
                }`}
              ></span>
              <span
                className={`absolute left-0 top-1/2 w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                  isMenuOpen
                    ? "-rotate-45 bg-blue-600"
                    : "translate-y-1.5 bg-gray-600 group-hover:bg-blue-600"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-white/90 backdrop-blur-md transition-all duration-500 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ top: "0", zIndex: 40 }}
        >
          <nav className="flex flex-col items-center justify-center h-screen gap-8 px-6 bg-white/90 backdrop-blur-md">
            {["home", "about", "projects", "skills", "contact"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`relative text-lg font-medium transition-all duration-300 transform ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-4 opacity-0"
                  } ${
                    activeSection === section
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  style={{
                    transitionDelay: `${
                      [
                        "home",
                        "about",
                        "projects",
                        "skills",
                        "contact",
                      ].indexOf(section) * 100
                    }ms`,
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 ${
                        activeSection === section
                          ? "scale-x-100"
                          : "hover:scale-x-100"
                      }`}
                    ></span>
                  </span>
                </a>
              ),
            )}

            {/* Mobile Social Links */}
            <div className="flex items-center gap-8 mt-8">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Deepu1004",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/saideepakvaranasi/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:varanasisaideepak@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 transition-all duration-300 transform ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                  aria-label={label}
                >
                  <span className="absolute inset-0 rounded-full bg-blue-50 opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
                  <Icon
                    size={24}
                    className="relative text-gray-600 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

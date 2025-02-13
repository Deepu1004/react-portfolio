import React from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import resume from "../../public/resume.pdf";
import profileImageUrl from "/images/Image.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100/50 rounded-full text-blue-700 text-sm font-medium shadow-md hover:scale-105 transition-all">
              <Sparkles className="w-4 h-4 mr-2" />
              Full Stack Developer
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-blue-900">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Innovative
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Efficient
              </span>{" "}
              Solutions
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              I am a passionate software developer who thrives on solving
              complex challenges through clean, efficient code. With a strong
              foundation in full-stack development and a love for competitive
              programming, I am always striving to deliver top-tier,
              high-performance applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={resume}
                download
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 font-medium"
              >
                Download Resume
                <Download className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/10 font-medium group"
              >
                Get in Touch
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-3xl transform rotate-6 scale-105" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-3xl transform -rotate-6 scale-105" />
            <img
              src={profileImageUrl}
              alt="Profile"
              className="relative rounded-3xl shadow-2xl transform hover:scale-[1.05] transition-transform duration-300 w-full object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

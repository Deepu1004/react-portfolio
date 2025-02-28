import React from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import resume from "../../public/resume.pdf";
import profileImageUrl from "/images/Image.jpeg";
import { motion } from "framer-motion"; // Import framer-motion

const Hero = () => {
  // Animation variants for initial appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3, // Delay before animating children
        staggerChildren: 0.2, // Stagger the animation of each child
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5, // Delay the image animation slightly
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50"
      variants={containerVariants} // Apply the container variants
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-blue-100/50 rounded-full text-blue-700 text-sm font-medium shadow-md hover:scale-105 transition-all"
              variants={itemVariants} // Apply the item variants
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Full Stack Developer
            </motion.div>
            <motion.h1
              className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-blue-900"
              variants={itemVariants} // Apply the item variants
            >
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Innovative
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Efficient
              </span>{" "}
              Solutions
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed max-w-xl"
              variants={itemVariants} // Apply the item variants
            >
              I am a passionate software developer who thrives on solving
              complex challenges through clean, efficient code. With a strong
              foundation in full-stack development and a love for competitive
              programming, I am always striving to deliver top-tier,
              high-performance applications.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                href={resume}
                download
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 font-medium"
                variants={buttonVariants}
                whileHover="hover"
              >
                Download Resume
                <Download className="ml-2" size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/10 font-medium group"
                variants={buttonVariants}
                whileHover="hover"
              >
                Get in Touch
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </motion.a>
            </div>
          </div>
          <motion.div
            className="relative"
            variants={imageVariants} // Apply image variants
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-3xl transform rotate-6 scale-105" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-3xl transform -rotate-6 scale-105" />
            <img
              src={profileImageUrl}
              alt="Profile"
              className="relative rounded-3xl shadow-2xl transform hover:scale-[1.05] transition-transform duration-300 w-full object-cover aspect-[4/5]"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

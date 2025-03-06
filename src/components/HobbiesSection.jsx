import React, { useState, useEffect, useRef } from "react";
import { motion, useDragControls } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  Utensils,
  Camera,
  Gamepad,
  Music,
  BookOpen,
  Mountain,
  Sparkles,
} from "lucide-react";

const funnyMessages = [
  "Hey! My hobbies are part of who I am! 🎮",
  "Nice try, but these hobbies aren't going anywhere! 📸",
  "You can't escape your interests that easily! 🎵",
  "These hobbies are stuck with me like glue! 🏔️",
  "Sorry, my hobbies are here to stay! 📚",
  "Nope! Can't get rid of what makes me, me! 🍳",
];

const generateRandomPosition = (
  containerWidth,
  containerHeight,
  elementWidth = 120,
  elementHeight = 40,
) => {
  const maxX = containerWidth - elementWidth;
  const maxY = containerHeight - elementHeight;
  return {
    x: Math.floor(Math.random() * maxX),
    y: Math.floor(Math.random() * maxY),
  };
};

const generateRandomRotation = () => {
  return Math.random() * 10 - 5;
};

const generateRandomScale = () => {
  return 0.9 + Math.random() * 0.2;
};

const createInitialHobbies = (containerWidth, containerHeight) => {
  const hobbiesData = [
    { id: "cooking", name: "Cooking", icon: <Utensils size={20} /> },
    { id: "photography", name: "Photography", icon: <Camera size={20} /> },
    { id: "gaming", name: "Gaming", icon: <Gamepad size={20} /> },
    { id: "hiking", name: "Hiking", icon: <Mountain size={20} /> },
    { id: "reading", name: "Reading", icon: <BookOpen size={20} /> },
    { id: "music", name: "Music", icon: <Music size={20} /> },
  ];

  return hobbiesData.map((hobby) => ({
    ...hobby,
    position: generateRandomPosition(containerWidth, containerHeight),
    rotation: generateRandomRotation(),
    scale: generateRandomScale(),
  }));
};

const HobbyItem = ({ hobby, updatePosition, isDarkMode, containerSize }) => {
  const controls = useDragControls();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const elementRef = useRef(null);

  const checkBoundaries = (info) => {
    if (!elementRef.current) return false;

    const element = elementRef.current;
    const elementRect = element.getBoundingClientRect();
    const newX = hobby.position.x + info.offset.x;
    const newY = hobby.position.y + info.offset.y;

    // Check if the new position would be within boundaries
    const isWithinBounds =
      newX >= 0 &&
      newY >= 0 &&
      newX <= containerSize.width - elementRect.width &&
      newY <= containerSize.height - elementRect.height;

    return isWithinBounds;
  };

  const handleDragEnd = (_, info) => {
    if (checkBoundaries(info)) {
      const newPosition = {
        x: hobby.position.x + info.offset.x,
        y: hobby.position.y + info.offset.y,
      };
      updatePosition(hobby.id, newPosition);
    } else {
      // Show random funny alert
      const randomMessage =
        funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
      setAlertMessage(randomMessage);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);

      // Generate new random position within container
      const newPosition = generateRandomPosition(
        containerSize.width,
        containerSize.height,
      );
      updatePosition(hobby.id, newPosition);
    }
  };

  return (
    <>
      <motion.div
        ref={elementRef}
        key={hobby.id}
        className={`absolute cursor-move px-5 py-3 rounded-lg ${
          isDarkMode
            ? "bg-gradient-to-r from-blue-500/30 to-blue-500/30 hover:from-blue-500/40 hover:to-blue-500/40"
            : "bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200"
        } flex items-center gap-3 transition-colors duration-200 backdrop-blur-sm shadow-md border ${
          isDarkMode ? "border-blue-500/20" : "border-blue-200"
        }`}
        drag
        dragControls={controls}
        dragMomentum={false}
        dragElastic={0.1}
        initial={{
          x: hobby.position.x,
          y: hobby.position.y,
          rotate: hobby.rotation,
          scale: hobby.scale,
        }}
        animate={{
          x: hobby.position.x,
          y: hobby.position.y,
          rotate: hobby.rotation,
          scale: hobby.scale,
        }}
        onDragEnd={handleDragEnd}
        whileHover={{
          scale: hobby.scale * 1.1,
          zIndex: 10,
          boxShadow: isDarkMode
            ? "0 0 15px 2px rgba(59, 130, 246, 0.3)"
            : "0 0 15px 2px rgba(59, 130, 246, 0.2)",
        }}
        whileTap={{ scale: hobby.scale * 0.95, zIndex: 10 }}
        onPointerDown={(e) => {
          controls.start(e);
        }}
      >
        <span
          className={`p-1.5 rounded-full ${
            isDarkMode
              ? "bg-blue-500/30 text-blue-200"
              : "bg-blue-200 text-blue-700"
          }`}
        >
          {hobby.icon}
        </span>
        <span
          className={`text-sm font-medium ${
            isDarkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          {hobby.name}
        </span>
      </motion.div>

      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl ${
            isDarkMode
              ? "bg-indigo-900/90 text-indigo-100"
              : "bg-indigo-100 text-indigo-800"
          } shadow-lg z-50 text-sm font-medium flex items-center gap-2`}
        >
          <span className="text-xl">✨</span>
          {alertMessage}
          <span className="text-xl">✨</span>
        </motion.div>
      )}
    </>
  );
};

const HobbiesSection = () => {
  const { isDarkMode } = useTheme();
  const [containerSize, setContainerSize] = useState({
    width: 600,
    height: 300,
  });
  const [hobbies, setHobbies] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    setHobbies(createInitialHobbies(containerSize.width, containerSize.height));
  }, [containerSize]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updatePosition = (id, newPosition) => {
    setHobbies((prevHobbies) =>
      prevHobbies.map((hobby) =>
        hobby.id === id ? { ...hobby, position: newPosition } : hobby,
      ),
    );
  };

  const randomizePositions = () => {
    setHobbies((prevHobbies) =>
      prevHobbies.map((hobby) => ({
        ...hobby,
        position: generateRandomPosition(
          containerSize.width,
          containerSize.height,
        ),
        rotation: generateRandomRotation(),
        scale: generateRandomScale(),
      })),
    );
  };

  return (
    <motion.div
      className={`p-6 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 to-indigo-50"
      } rounded-xl shadow-lg min-h-[450px] relative overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <h3
            className={`text-xl font-bold ${
              isDarkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            <span className="text-blue-400">✦</span> Beyond the Code
          </h3>

          <motion.button
            onClick={randomizePositions}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium ${
              isDarkMode
                ? "bg-blue-500/20 text-blue-300 hover:bg-blue-500/30"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            } transition-colors`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles size={14} />
            Randomize
          </motion.button>
        </div>

        <p
          className={`mb-4 mt-2 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Explore my interests and hobbies beyond the digital realm.
        </p>
      </div>

      <div
        ref={containerRef}
        className={`relative mt-6 h-[300px] rounded-lg overflow-hidden ${
          isDarkMode ? "bg-gray-800/50" : "bg-white/50"
        } backdrop-blur-sm shadow-inner`}
      >
        {hobbies.map((hobby) => (
          <HobbyItem
            key={hobby.id}
            hobby={hobby}
            updatePosition={updatePosition}
            isDarkMode={isDarkMode}
            containerSize={containerSize}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default HobbiesSection;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clickSound from "../assets/click.wav";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaPhp,
  FaJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiAngular,
  SiOpenai,
  SiMysql,
  SiStripe,
  SiGit,
  SiVercel,
} from "react-icons/si";

const allTechnologies = [
  { name: "React.js", icon: <FaReact />, level: "Expert", group: "Frontend" },
  { name: "JavaScript", icon: <FaJs />, level: "Expert", group: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs />, level: "Expert", group: "Backend" },
  { name: "Express.js", icon: <SiExpress />, level: "Expert", group: "Backend" },
  { name: "PHP", icon: <FaPhp />, level: "Intermediate", group: "Backend" },
  { name: "MongoDB", icon: <SiMongodb />, level: "Expert", group: "Database" },
  { name: "MySQL", icon: <SiMysql />, level: "Intermediate", group: "Database" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Expert", group: "Frontend" },
  { name: "ShadCN UI", icon: <SiVercel />, level: "Beginner", group: "Frontend" },
  { name: "Angular.js", icon: <SiAngular />, level: "Intermediate", group: "Frontend" },
  { name: "AWS", icon: <FaAws />, level: "Beginner", group: "Cloud & DevOps" },
  { name: "Git", icon: <SiGit />, level: "Intermediate", group: "Cloud & DevOps" },
  { name: "ChatGPT", icon: <SiOpenai />, level: "Expert", group: "AI & Integration" },
  { name: "Stripe", icon: <SiStripe />, level: "Intermediate", group: "AI & Integration" },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Cloud & DevOps",
  "AI & Integration",
];

export default function Technologies() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [audio] = useState(typeof Audio !== "undefined" ? new Audio(clickSound) : null);

  const filtered =
    selectedCategory === "All"
      ? allTechnologies
      : allTechnologies.filter((tech) => tech.group === selectedCategory);

  const handleClick = (cat) => {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    setSelectedCategory(cat);
  };

  return (
    <section
      id="technologies"
      className="min-h-screen font-poppins text-white px-6 py-20 flex flex-col items-center"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Technologies
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClick(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-white text-black border-white"
                  : "border-gray-500 text-gray-400"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.h3
          key={selectedCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xl font-semibold text-center mb-6 text-gray-300"
        >
          {selectedCategory} Technologies
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {filtered.map((tech, index) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 w-full max-w-[200px] hover:bg-white/20 transition"
            >
              <motion.div
                className="text-4xl mb-2"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.6 }}
              >
                {tech.icon}
              </motion.div>
              <p className="text-sm font-semibold mb-1">{tech.name}</p>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  tech.level === "Expert"
                    ? "bg-green-600"
                    : tech.level === "Intermediate"
                    ? "bg-yellow-500"
                    : "bg-pink-500"
                }`}
              >
                {tech.level}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

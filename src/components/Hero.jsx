import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-6 py-20 overflow-hidden"
    >
      {/* ✨ Transparent Particles */}
      <Particles
        className="absolute inset-0 -z-10"
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 150 },
            move: { enable: true, speed: 1 },
            number: { value: 60 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-extrabold font-poppins mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Yog Golakiya
      </motion.h1>

      <motion.div
        className="text-xl md:text-2xl text-gray-400 font-medium font-poppins mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "React.js & UI Expert",
              "Node.js Backend Developer",
              "Crafting Web Experiences"
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>

      <motion.div
        className="flex gap-6 text-2xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a href="https://github.com/YogGolakiya" className="hover:text-blue-400 transition" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/yog-golakiya-456b26238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-blue-400 transition" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=golakiyayog@gmail.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><FaEnvelope /></a>
        <a href="/projects/CV-Yog Golakiya.pdf" className="hover:text-blue-400 transition" download><FaDownload /></a>
      </motion.div>
    </section>
  );
}

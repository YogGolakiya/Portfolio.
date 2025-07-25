// src/components/Projects.jsx
import { useSpring, animated } from "@react-spring/web";
import Tilt from "react-parallax-tilt";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Site",
    description: "Modern MERN stack e-commerce platform with payment integration and dashboard.",
    github: "https://github.com/YogGolakiya/BestBuy-backend",
    live: "https://best-buy-04.vercel.app/",
    image: "/projects/Shopping.png",
  },
  {
    title: "Coffee Shop",
    description: "React + Firebase based coffee ordering app with realtime database sync.",
    github: "https://github.com/YogGolakiya/Cafe-shop",
    live: "https://vi-cafe-b963a.web.app/",
    image: "/projects/Coffee.png",
  },
  {
    title: "Portfolio Website",
    description: "Fully animated, responsive portfolio built with React, Tailwind & Framer Motion.",
    github: "https://github.com/YogGolakiya/Portfolio",
    live: "https://yoggolakiya.github.io/Portfolio/",
    image: "/projects/Portfolio1.jpeg",
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="min-h-screen bg-black text-white px-6 py-20 flex flex-col font-poppins items-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const fadeUp = useSpring({
              from: { opacity: 0, transform: "translateY(40px)" },
              to: { opacity: 1, transform: "translateY(0px)" },
              delay: idx * 200,
            });

            return (
              <animated.div style={fadeUp} key={project.title}>
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.1}
                  scale={1.05}
                  transitionSpeed={2000}
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  className="bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    onClick={() => setSelectedImage(project.image)}
                    className="w-full h-48 object-cover cursor-pointer hover:opacity-90"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={project.live}
                        target="_blank"
                        className="text-sm flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500"
                      >
                        Live <FaExternalLinkAlt size={12} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        className="text-sm flex items-center gap-1 px-3 py-1 border border-gray-500 text-gray-300 rounded hover:text-white hover:border-white"
                      >
                        Code <FaGithub size={14} />
                      </a>
                    </div>
                  </div>
                </Tilt>
              </animated.div>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
        <Dialog.Panel className="max-w-3xl w-full mx-4">
          <img
            src={selectedImage}
            alt="Project Preview"
            className="w-full h-auto rounded-lg shadow-lg border border-gray-600"
          />
        </Dialog.Panel>
      </Dialog>
    </section>
  );
}

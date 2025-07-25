import { FaJs, FaReact, FaNodeJs, FaAws, FaMapMarkerAlt, FaEnvelope, FaUserCheck, FaBriefcase } from "react-icons/fa";
import { SiExpress, SiMongodb, SiAngular, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  const coreTechnologies = [
    { icon: <FaJs className="text-yellow-400" />, label: "JavaScript" },
    { icon: <FaReact className="text-cyan-400" />, label: "React.js" },
    { icon: <FaNodeJs className="text-green-600" />, label: "Node.js" },
    { icon: <SiExpress className="text-gray-300" />, label: "Express.js" },
    { icon: <SiAngular className="text-red-600" />, label: "Angular" },
    { icon: <SiMysql className="text-blue-500" />, label: "SQL" },
    { icon: <SiMongodb className="text-green-500" />, label: "MongoDB" },
    { icon: <FaAws className="text-orange-400" />, label: "AWS" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold font-poppins text-center mb-10">About Me</h2>
      <p className="max-w-3xl text-lg font-poppins text-center mb-12">
        I'm a passionate full stack developer with strong experience in both frontend and backend technologies. I specialize in building modern, scalable, and performant web applications using React.js for interactive UIs and Node.js for robust backend APIs. My enthusiasm for programming drives me to continuously learn and improve while crafting smooth, user-centric web experiences.
      </p>

      <div className="mb-12 text-center">
        <h3 className="text-2xl font-semibold font-poppins mb-6">Core Technologies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {coreTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-700 rounded-xl p-4 hover:bg-gray-800 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl mb-2">{tech.icon}</div>
              <div className="text-sm font-medium">{tech.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center font-poppins">
        <h3 className="text-2xl font-semibold font-poppins mb-4">Experience</h3>

        <motion.div
          className="max-w-3xl mx-auto bg-gray-900 rounded-xl p-6 border border-gray-700 text-left shadow-md shadow-blue-500/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaBriefcase className="text-blue-400 text-xl" />
            <div>
              <h4 className="text-lg font-semibold">Trainee Internship (Full Stack Developer)</h4>
              <p className="text-sm text-gray-400">Goyani Technologies &middot; May 2023 - April 2024</p>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li><strong>Front-End Development:</strong> Created user interfaces with HTML, CSS, and JavaScript, developed responsive web pages with React.</li>
            <li><strong>Back-End Development:</strong> Used Node.js and Express.js for server-side logic, managed API integrations and data for web applications.</li>
            <li><strong>Database Management:</strong> Utilized MongoDB for designing and maintaining efficient databases for multiple projects.</li>
          </ul>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
          <motion.div
            className="bg-gray-900 p-4 rounded-lg border border-gray-700 flex flex-col items-center text-center shadow-sm hover:shadow-blue-400/30 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaMapMarkerAlt className="text-blue-500 text-xl mb-2" />
            <p className="text-sm">Based in <strong>India</strong></p>
          </motion.div>

          <motion.div
            className="bg-gray-900 p-4 rounded-lg border border-gray-700 flex flex-col items-center text-center shadow-sm hover:shadow-red-400/30 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaEnvelope className="text-red-400 text-xl mb-2" />
            <a href="mailto:golakiyayog@gmail.com" className="text-sm text-gray-300 hover:text-white transition">golakiyayog@gmail.com</a>
          </motion.div>

          <motion.div
            className="bg-gray-900 p-4 rounded-lg border border-gray-700 flex flex-col items-center text-center shadow-sm hover:shadow-green-400/30 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <FaUserCheck className="text-green-400 text-xl mb-2" />
            <p className="text-sm font-medium">Open to Hire</p>
            <p className="text-xs text-gray-400">Relocation & Remote Friendly</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

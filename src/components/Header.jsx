import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaCode } from "react-icons/fa";


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "technologies", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top < window.innerHeight / 2) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Technologies", href: "#technologies" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className="py-4 px-6 flex justify-between items-center font-poppins sticky top-0 z-50 bg-black/70 backdrop-blur-md"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.a
        href="#hero"
        className="flex items-center gap-2 text-2xl font-bold text-white"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaCode className="text-blue-500" /> Yog Golakiya
      </motion.a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-gray-300">
        {navLinks.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            className={
              activeSection === link.href.substring(1)
                ? "text-blue-400"
                : "hover:text-blue-400"
            }
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {link.label}
          </motion.a>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <HiX className="text-white text-2xl" />
          ) : (
            <HiMenu className="text-white text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md flex flex-col gap-4 px-6 py-4 text-white md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  activeSection === link.href.substring(1)
                    ? "text-blue-400"
                    : "hover:text-blue-400"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

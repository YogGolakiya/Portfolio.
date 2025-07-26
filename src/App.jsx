import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles"; // 🔥 import your Lightning background

export default function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans text-white bg-gradient-to-b from-gray-900 to-black">
      
      {/* 🔥 Background Lightning Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles hue={260} intensity={1.2} speed={1.1} size={1.3} />
      </div>

      {/* 🔼 Main Content (above lightning) */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

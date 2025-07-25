import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-white bg-gradient-to-b from-gray-900 to-black">
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

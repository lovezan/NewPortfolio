import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Project from "./sections/Project";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";

function App() {
  return (
    <main className="w-full min-h-screen">
      {" "}
      {/* Full width and full screen height */}
      <Navbar />
      <Hero />
      <About />
      <Project/>
      <Clients/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;

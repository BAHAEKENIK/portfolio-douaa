import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Process } from "./sections/Process";
import { Education } from "./sections/Education";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Process />
        <Education />
      </main>

      <Footer />
    </>
  );
}

export default App;
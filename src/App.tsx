import { lazy } from "react";

import { Navbar } from "./components/layout/Navbar";
import { LazySection } from "./components/layout/LazySection";
import { SectionSkeleton } from "./components/layout/SectionSkeleton";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";

const LazyExperience = lazy(() =>
  import("./sections/Experience").then((m) => ({ default: m.Experience })),
);
const LazyProjects = lazy(() =>
  import("./sections/Projects").then((m) => ({ default: m.Projects })),
);
const LazySkills = lazy(() =>
  import("./sections/Skills").then((m) => ({ default: m.Skills })),
);
const LazyProcess = lazy(() =>
  import("./sections/Process").then((m) => ({ default: m.Process })),
);
const LazyEducation = lazy(() =>
  import("./sections/Education").then((m) => ({ default: m.Education })),
);
const LazyFooter = lazy(() =>
  import("./sections/Footer").then((m) => ({ default: m.Footer })),
);

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />

        <LazySection
          id="experience"
          estimateHeight={900}
          skeleton={<SectionSkeleton kind="timeline" rows={3} />}
        >
          <LazyExperience />
        </LazySection>

        <LazySection
          id="projects"
          estimateHeight={2400}
          dark
          skeleton={<SectionSkeleton kind="projects" rows={3} />}
        >
          <LazyProjects />
        </LazySection>

        <LazySection
          id="skills"
          estimateHeight={800}
          skeleton={<SectionSkeleton kind="columns" rows={3} />}
        >
          <LazySkills />
        </LazySection>

        <LazySection
          id="process"
          estimateHeight={500}
          skeleton={<SectionSkeleton kind="process" rows={4} />}
        >
          <LazyProcess />
        </LazySection>

        <LazySection
          id="education"
          estimateHeight={900}
          skeleton={<SectionSkeleton kind="timeline" rows={4} />}
        >
          <LazyEducation />
        </LazySection>
      </main>

      <LazySection
        id="footer"
        estimateHeight={420}
        skeleton={<SectionSkeleton kind="footer" />}
      >
        <LazyFooter />
      </LazySection>
    </>
  );
}

export default App;
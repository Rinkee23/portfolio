import { lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Profiles } from "./components/sections/Profiles";
import { Contact } from "./components/sections/Contact";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { CursorFollower } from "./components/ui/CursorFollower";
import "./index.css";

// Lazy-load the resume viewer so the initial bundle stays light.
const ResumePreview = lazy(() => import("./components/sections/ResumePreview"));

function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <CursorFollower />
      <div className="min-h-screen bg-bg text-text">
        <Header />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Profiles />
          <Contact />
          <section id="resume" className="section-shell" aria-labelledby="resume-heading">
            <div className="container-site">
              <Suspense fallback={<div className="glass-card p-8 text-center text-text-muted">Loading resume…</div>}>
                <ResumePreview />
              </Suspense>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
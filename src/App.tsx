
import  Hero from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { WebsiteApproach } from './components/Approach';
// import { CorkboardSections } from './components/CorkboardSections';
// import { TechStack } from './components/Stack';
// import { Header } from './components/Header';

export default function App() {
  return (
    <div className="min-h-screen  text-slate-800 bg-cream">
      {/* Header/Nav can be added here */}
      <main className=" mx-auto  pb-20">
        {/* <Header/> */}
        <Hero />
      <About/>
      <WebsiteApproach/>
                <Skills />

        <Projects />
                <Experience />
                {/* <CorkboardSections/> */}

        <Contact />
        <Footer />
      </main>
    </div>
  );
}

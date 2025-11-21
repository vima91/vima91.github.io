import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";

// Lazy load below-the-fold sections for better initial page load
const Projects = dynamic(() => import("@/components/sections/Projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <div className="min-h-screen" />,
});

const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="min-h-screen" />,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

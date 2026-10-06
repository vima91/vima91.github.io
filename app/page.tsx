import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Leadership } from "@/components/sections/Leadership";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content"><Hero /><Projects /><Leadership /><Experience /><Skills /><About /><Contact /></main><Footer /></>;
}

import React from "react";
import Navigation from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Index;

import React from "react";
import "./index.css";
import "/styles/tailwind.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </div>
  );
}

export default App;

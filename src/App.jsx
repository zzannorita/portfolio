import React from "react";
import "./index.css";
import "../src/styles/tailwind.css";
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
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <SideBar />
    </div>
  );
}

export default App;

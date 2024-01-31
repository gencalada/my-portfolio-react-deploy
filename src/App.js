import "./App.css"
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import ContactMe from "./pages/ContactMe"
import Footer from "./components/Footer"


const App = () => {
  return (
    <Router>
    <>
      <Header />
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      <Footer />
    </>
    </Router>
  );
};

export default App;

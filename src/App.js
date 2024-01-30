import React from 'react'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import './App.css'
import NavBar from './components/NavBar'
import Greeter from './components/Greeter'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <div className='overall-site-border'>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Greeter />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contactme" element={<ContactMe />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  )}

export default App
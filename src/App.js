import React from 'react'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import './App.css'
import NavBar from './components/NavBar'
import Greeter from './components/Greeter'

const App = () => {
  return (
    <>
      <div className='overall-site-border'>
        <NavBar />
        <Greeter />
        <AboutMe/>
        <Projects/>
        <ContactMe/>
      </div>
    </>
  )
}

export default App
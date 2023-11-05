import React from 'react'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import './App.css'

const App = () => {
  return (
    <>
      <div className='overall-site-border'>
        <h1>Gregory Encalada</h1>
        <AboutMe/>
        <Projects/>
      </div>
    </>
  )
}

export default App
import React from 'react'

const Projects = () => {
  const projects = [
    {name: 'Project 1', description: 'This is a description for project 1. It was awesome to work with others and create this app together!'},
    {name: 'Project 2', description: 'This is a description for project 1. It was awesome to work with others and create this app together!'},
    {name: 'Project 3', description: 'This is a description for project 1. It was awesome to work with others and create this app together!'}
  ]

  return (
    <div className='projects'>
        <h1>Projects</h1>
        <div className='projects-flex'>
          {projects.map(project => {
            return(
              <div className='project-cards'>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Projects
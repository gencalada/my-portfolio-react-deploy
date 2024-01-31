import React from 'react';

const Projects = ({ projects }) => {
  const projectsList = [
    { name: 'Laugh Host: 3001', description: 'Using React and Ruby on Rails to create a full CRUD site. A fun and lighthearted application where the user can store creative recipes and enjoy some laughter along the way.' },
    { name: 'Love Birds', description: '' },
    { name: 'Tic-Tac-Toe', description: '' }
  ];

  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projects-flex'>
        {projectsList.map((project, index) => (
          <div className='project-cards' key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

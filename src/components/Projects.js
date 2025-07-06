import React from 'react';
import '../styles/projects.css';

const projects = [
  { title: 'E-commerce Analytics', description: 'Built a dashboard using React and Snowflake.' },
  { title: 'Cloud Migration Tool', description: 'Migrated SQL workloads to Azure using Data Factory.' },
  { title: 'Portfolio Website', description: 'This portfolio built with React and GitHub Pages.' }
];

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <h3>{project.title}</h3>
              </div>
              <div className="card-back">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

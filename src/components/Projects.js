import React from 'react';
import '../styles/projects.css';

const projects = [
  {
    title: 'E-commerce Application',
    description: 'Built a dynamic dashboard using React and Snowflake for real-time analytics.'
  },
  {
    title: 'Loan Management System',
    description: 'Automated migration of SQL workloads to Azure using Data Factory.'
  },
  {
    title: 'Portfolio Website',
    description: 'Built this responsive portfolio with React, deployed via GitHub Pages.'
  },
  {
    title: 'Motel Booking System',
    description: 'Built this responsive portfolio with React, deployed via GitHub Pages.'
  },
  {
    title: 'Cassandra Database ',
    description: 'Built this responsive portfolio with React, deployed via GitHub Pages.'
  }
];

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-title">{project.title}</div>
            <div className="project-description">{project.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

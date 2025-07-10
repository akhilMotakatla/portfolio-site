import React from 'react';
import '../styles/experience.css';

const experiences = [
  {
    title: 'Graduate Teaching Fellow',
    company: 'University of North Texas',
    duration: 'Aug 2023 – May 2025',
    description: 'Delivered lectures and helped build ETL pipelines using Azure Data Factory.',
    logo: '/logos/unt.png'
  },
  {
    title: 'Software Engineer',
    company: 'Deloitte USI',
    duration: 'Apr 2022 – Aug 2023',
    description: 'Worked on .NET microservices, CI/CD pipelines, and RESTful APIs.',
    logo: '/logos/deloitte.png'
  },
  {
    title: 'Software Engineer',
    company: 'Zebra Technologies',
    duration: 'Feb 2020 – Mar 2022',
    description: 'Created Power BI dashboards and automated data workflows.',
    logo: '/logos/zebra.png'
  },
  {
    title: 'Software Engineer',
    company: 'Wipro Technologies',
    duration: 'Jan 2019 – Jan 2020',
    description: 'Focused on front-end development and process automation.',
    logo: '/logos/wipro.png'
  }
];

function Experience() {
  return (
    <section className="experience-timeline">
      <h2 className="experience-timeline__title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
             
          >
            <div className="timeline-content">
              <img src={exp.logo} alt={exp.company} className="timeline-logo" />
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-duration">{exp.duration}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

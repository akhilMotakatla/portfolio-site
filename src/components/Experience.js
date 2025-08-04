import React from 'react';
import '../styles/experience.css';

const experiences = [
  {
    title: 'Graduate Teaching Fellow',
    company: 'University of North Texas',
    duration: 'Aug 2023 – May 2025',
    description: 'Delivered CSCE 1015 lectures, assisted in curriculum development, and provided student support. Developed and assigned hands-on, real-world assignments to help students build foundational and advanced skills.',
    logo: '/logos/unt.png'
  },
  {
    title: 'Software Engineer',
    company: 'Deloitte USI',
    duration: 'Apr 2022 – Aug 2023',
    description: 'Worked as .Net Developer, focusing on Internal Audit Web Applications. Implemented features and resolved issues in a collaborative environment. Created Analytics dashboards for ESG using Backend APIs.',
    logo: '/logos/deloitte.png'
  },
  {
    title: 'Software Engineer',
    company: 'Zebra Technologies',
    duration: 'Feb 2020 – Mar 2022',
    description: ' Designed and delivered scalable .NET solutions using ASP.NET Core, Web API, and Entity Framework, incorporating OAuth2, asynchronous APIs to drive secure, maintainable enterprise applications.',
    logo: '/logos/zebra.png'
  },
  {
    title: 'Software Engineer',
    company: 'Wipro Technologies',
    duration: 'Jan 2019 – Jan 2020',
    description: ' Worked as full-stack developer using ASP.NET MVC, Web API, AngularJS, and SQL Server, optimizing application performance and reducing database calls through effective caching and query tuning strategies.',
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
              
              <p className="experience-company">{exp.company}</p>
              <h3 className="experience-title">{exp.title}</h3>
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

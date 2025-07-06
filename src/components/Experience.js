import React from 'react';
import '../styles/experience.css';

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>
       <div className="job">
        <h3>University of North Texas</h3>
        <p>Graduate Teachign Fellow | 2022–2024</p>
        <p>Worked on dashboards, ETL pipelines, and Snowflake integrations.</p>
      </div>
      <div className="job">
        <h3>Deloitte</h3>
        <p>Software Engineer | 2022–2024</p>
        <p>Worked on dashboards, ETL pipelines, and Snowflake integrations.</p>
      </div>
      <div className="job">
        <h3>Amigo Smart Tech</h3>
        <h4>Client : Zebra Technologies</h4>
        <p>Software Engineer | 2020–2022</p>
        <p>Built internal tools using C#, APIs, and SQL Server.</p>
      </div>
       <div className="job">
        <h3>Amigo Smart Tech</h3>
        <h4>Client : Wipro Technologies</h4>
        <p>Software Engineer | 2022–2024</p>
        <p>Worked on dashboards, ETL pipelines, and Snowflake integrations.</p>
      </div>
    </section>
  );
}

export default Experience;

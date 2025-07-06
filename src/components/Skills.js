import React from 'react';
import '../styles/skills.css';

function Skills() {
  const skills = [
    'JavaScript', 'React', '.NET', 'Azure', 'SQL Server',
    'Python', 'Docker', 'Snowflake', 'Git', 'REST APIs'
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;

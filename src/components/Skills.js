import React from 'react';
import '../styles/skills.css';

const skills = [
  { name: 'React', img: '/skills/react.png' },
  { name: '.NET', img: '/skills/dotnet.png' },
  { name: 'Python', img: '/skills/python.png' },
  { name: 'Azure', img: '/skills/azure.png' },
  { name: 'SQL', img: '/skills/sql.png' },
  { name: 'Power BI', img: '/skills/powerbi.png' },
  { name: 'JavaScript', img: '/skills/javascript.png' },
  { name: 'HTML', img: '/skills/html.png' },
  { name: 'CSS', img: '/skills/css.png' },
  { name: 'C#', img: '/skills/csharp.png' },
  { name: 'aws', img: '/skills/aws.png' },
  { name: 'Node.js', img: '/skills/nodejs.png' },
  { name: 'Docker', img: '/skills/docker.png' },
  { name: 'GitHub', img: '/skills/github.png' },
  { name: 'Kubernetes', img: '/skills/kubernetes.png' },

];

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={skill.img} alt={skill.name} />
              </div>
              <div className="flip-card-back">
                <span>{skill.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

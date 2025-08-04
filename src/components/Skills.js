import React from 'react';
import '../styles/skills.css';

const skills = [
  { name: 'React', img: `${process.env.PUBLIC_URL}/logos/react.png` },
  { name: '.NET', img: `${process.env.PUBLIC_URL}/logos/dotnet.png` },
  { name: 'Python', img: `${process.env.PUBLIC_URL}/logos/python.png` },
  { name: 'Azure', img: `${process.env.PUBLIC_URL}/logos/azure.png` },
  { name: 'SQL', img: `${process.env.PUBLIC_URL}/logos/sql.png` },
  { name: 'JavaScript', img: `${process.env.PUBLIC_URL}/logos/javascript.png` },
  { name: 'HTML', img: `${process.env.PUBLIC_URL}/logos/html.png` },
  { name: 'CSS', img: `${process.env.PUBLIC_URL}/logos/css.png` },
  { name: 'C#', img: `${process.env.PUBLIC_URL}/logos/csharp.png` },
  { name: 'aws', img: `${process.env.PUBLIC_URL}/logos/aws.png` },
  { name: 'Node.js', img: `${process.env.PUBLIC_URL}/logos/nodejs.png` },
  { name: 'Docker', img: `${process.env.PUBLIC_URL}/logos/docker.png` },
  { name: 'GitHub', img: `${process.env.PUBLIC_URL}/logos/github.png` },
  { name: 'Kubernetes', img: `${process.env.PUBLIC_URL}/logos/kubernetes.png` },
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

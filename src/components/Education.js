import React from 'react';
import '../styles/education.css';

const educationData = [
  {
    institution: 'University of North Texas',
    degree: 'Master of Science in Computer Science',
  },
  {
    institution: 'CMR College of Engineering and Technology',
    degree: 'Bachelor of Technology in Electronics and Communication',
    
  }
];

function Education() {
  return (
    <section className="education-section">
      <h2 className="education-title">What did I Study</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3 className="edu-institution">{edu.institution}</h3>
            <p className="edu-degree">{edu.degree}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

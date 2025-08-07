import React from 'react';
import '../styles/education.css';

const educationData = [
  {
    institution: 'University of North Texas',
    degree: 'Master of Science',
    Specialization: 'Computer and Information Sciences',
    logo: `${process.env.PUBLIC_URL}/logos/unt.png`,
  },
  {
    institution: 'CMR College of Engineering and Technology',
    degree: 'Bachelor of Technology',
    Specialization: 'Electronics and Communication Engineering',
    logo: `${process.env.PUBLIC_URL}/logos/cmr.png`,
  },
];

function Education() {
  return (
    <section className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-cards">
        {educationData.map(({ institution, degree,Specialization, logo }, index) => (
          <div className="education-card" key={index}>
            <img src={logo} alt={`${institution} logo`} className="education-logo" />
            <div className="education-details">
              <h3>{institution}</h3>
              <h4>{degree}</h4>
              <p>{Specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

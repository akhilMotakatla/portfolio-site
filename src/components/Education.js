import React from 'react';
import '../styles/education.css';

const educationData = [
  {
    institution: 'University of North Texas',
    degree: 'Master of Science in Computer Science',
    logo: `${process.env.PUBLIC_URL}/logos/unt.png`,
  },
  {
    institution: 'CMR College of Engineering and Technology',
    degree: 'Bachelor of Technology in Electronics and Communication',
    logo: `${process.env.PUBLIC_URL}/logos/cmr.png`,
  },
];

function Education() {
  return (
    <section className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-cards">
        {educationData.map(({ institution, degree, logo }, index) => (
          <div className="education-card-flip" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={logo} alt={`${institution} logo`} className="education-logo-big" />
              </div>
              <div className="card-back">
                <h3 className="edu-institution">{institution}</h3>
                <p className="edu-degree">{degree}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

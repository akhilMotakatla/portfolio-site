import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBook, FiCalendar } from 'react-icons/fi';
import './Education.css';

const logoPath = (path) => process.env.PUBLIC_URL + path;

const education = [
  {
    institution: 'University of North Texas',
    degree: "Master's of Science",
    field: 'Computer and Information Science',
    duration: 'Aug 2023 – May 2025',
    location: 'Denton, TX',
    logo: logoPath('/logos/unt.png'),
    color: '#10b981',
    highlights: [
      'Graduate Teaching Assistant — instructed 150+ students',
      'Covered cloud, networking, secure coding, SQL & ETL',
      '95% of students completed end-to-end analytics projects',
    ],
    courses: ['Cloud Computing', 'Advanced Databases', 'Distributed Systems', 'Network Security', 'ML Fundamentals'],
  },
  {
    institution: 'CMR College of Engineering & Technology',
    degree: 'Bachelor of Technology',
    field: 'Electronics & Communication Engineering',
    duration: '2015 – 2019',
    location: 'Hyderabad, India',
    logo: logoPath('/logos/cmr.png'),
    color: '#6366f1',
    highlights: [
      'Strong foundation in algorithms, data structures & systems',
      'Led technical projects in embedded systems & software dev',
      'Graduated with distinction in computer science electives',
    ],
    courses: ['Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks', 'DBMS'],
  },
];

const certifications = [
  { name: 'Microsoft Azure Fundamentals', issuer: 'Microsoft', icon: '☁️', color: '#0078d4' },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', icon: '🟠', color: '#ff9900' },
  { name: 'ASP.NET Core Developer', issuer: 'Microsoft Learn', icon: '🔷', color: '#6366f1' },
  { name: 'Microservices Architecture', issuer: 'Coursera', icon: '⚙️', color: '#a855f7' },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.5, ease: 'easeOut' } },
});

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section className="section edu-section" id="education">
      <div className="bg-glow" style={{ width: 500, height: 500, background: '#10b981', top: '-100px', left: '-150px' }} />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">Education</div>
          <h2 className="section-title">Academic <span>Foundation</span></h2>
          <p className="section-subtitle">
            Graduate-level expertise in computer science, cloud systems, and secure software engineering.
          </p>
        </div>

        <div ref={ref} className="edu-layout">
          {/* Degrees */}
          <div className="edu-degrees">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                className="edu-card glass-card"
                variants={fadeUp(i * 0.15)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                style={{ '--edu-color': edu.color }}
              >
                <div className="edu-card-top">
                  <div className="edu-logo-wrap">
                    <img src={edu.logo} alt={edu.institution} className="edu-logo" />
                  </div>
                  <div className="edu-info">
                    <div className="edu-degree-badge" style={{ color: edu.color, background: `${edu.color}12`, borderColor: `${edu.color}30` }}>
                      <FiAward size={12} /> {edu.degree}
                    </div>
                    <h3 className="edu-institution">{edu.institution}</h3>
                    <p className="edu-field"><FiBook size={12} /> {edu.field}</p>
                    <p className="edu-duration"><FiCalendar size={12} /> {edu.duration} · {edu.location}</p>
                  </div>
                </div>

                <div className="edu-highlights">
                  {edu.highlights.map((h, j) => (
                    <div key={j} className="edu-highlight">
                      <span className="edu-bullet" style={{ background: edu.color }} />
                      {h}
                    </div>
                  ))}
                </div>

                <div className="edu-courses">
                  {edu.courses.map(c => (
                    <span key={c} className="edu-course-tag">{c}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            className="certs-panel"
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <h3 className="certs-title">Certifications</h3>
            <div className="certs-grid">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  className="cert-card glass-card"
                  whileHover={{ scale: 1.04, y: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ '--cert-color': cert.color }}
                >
                  <span className="cert-icon">{cert.icon}</span>
                  <div>
                    <p className="cert-name">{cert.name}</p>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

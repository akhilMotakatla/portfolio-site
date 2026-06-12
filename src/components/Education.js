import React, { useRef } from 'react';
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

const EduCard = ({ edu, index, inView }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.015)`;
    card.style.transition = 'transform 0.08s ease';
    const glow = card.querySelector('.edu-card-glow');
    if (glow) {
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.transition = 'transform 0.55s ease';
    const glow = card.querySelector('.edu-card-glow');
    if (glow) glow.style.opacity = '0';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 40, filter: 'blur(8px)' }}
      transition={{ delay: index * 0.15, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        ref={cardRef}
        className="edu-card glass-card"
        style={{ '--edu-color': edu.color }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Cursor spotlight glow */}
        <div className="edu-card-glow" style={{ background: edu.color }} />

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
      </div>
    </motion.div>
  );
};

const CertCard = ({ cert, index, inView }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -5;
    const rotY = ((x - cx) / cx) * 5;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
    card.style.transition = 'transform 0.08s ease';
    const glow = card.querySelector('.cert-card-glow');
    if (glow) {
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.transition = 'transform 0.55s ease';
    const glow = card.querySelector('.cert-card-glow');
    if (glow) glow.style.opacity = '0';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: 20, filter: 'blur(6px)' }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        ref={cardRef}
        className="cert-card glass-card"
        style={{ '--cert-color': cert.color }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Cursor spotlight glow */}
        <div className="cert-card-glow" style={{ background: cert.color }} />
        <span className="cert-icon">{cert.icon}</span>
        <div>
          <p className="cert-name">{cert.name}</p>
          <p className="cert-issuer">{cert.issuer}</p>
        </div>
      </div>
    </motion.div>
  );
};

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
              <EduCard key={edu.institution} edu={edu} index={i} inView={inView} />
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            className="certs-panel"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="certs-title">Certifications</h3>
            <div className="certs-grid">
              {certifications.map((cert, i) => (
                <CertCard key={cert.name} cert={cert} index={i} inView={inView} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

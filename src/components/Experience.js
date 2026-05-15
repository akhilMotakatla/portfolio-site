import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronDown, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const logoPath = (path) => process.env.PUBLIC_URL + path;

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Creative Mind Tech',
    duration: 'Oct 2025 – Present',
    location: 'Remote',
    logo: logoPath('/logos/cmt.png'),
    initials: 'CM',
    color: '#6366f1',
    current: true,
    summary: 'Building healthcare web applications serving 5,000+ daily users using ASP.NET MVC, Angular, and cloud-native architectures.',
    achievements: [
      'Developed healthcare platform using ASP.NET MVC, C#, Web API & Angular on n-tier architecture — 5,000+ daily users, 35% workflow efficiency boost',
      'Engineered responsive UIs reducing page load time by 57% and boosting usability scores by 30%',
      'Optimized SQL Server databases with stored procedures and indexes, cutting query time by 45% across 2M+ records',
      'Secured RESTful APIs with Okta / OWASP standards — 99.9% uptime, 60% reduction in vulnerabilities',
    ],
    tech: ['ASP.NET MVC', 'C#', 'Angular', 'SQL Server', 'Entity Framework', 'REST APIs', 'Okta'],
  },
  {
    title: 'Software Engineer',
    company: 'Mable Technologies',
    duration: 'Aug 2025 – Oct 2025',
    location: 'Remote',
    logo: logoPath('/logos/mable.png'),
    initials: 'MT',
    color: '#06b6d4',
    current: false,
    summary: 'Built a document management platform for Public Housing Authorities processing 100K+ documents daily.',
    achievements: [
      'Built document management platform — secure handling of 500K+ documents, 50% faster retrieval',
      'Developed C# data ingestion & validation modules processing 100K+ documents daily with 40% accuracy boost',
      'Implemented full-stack MVC with Razor UI, improving page response by 35% and query performance by 45%',
      'Applied RBAC & Git-based CI/CD — 50% faster deployments with zero security incidents',
    ],
    tech: ['ASP.NET MVC', 'C#', 'SQL Server', 'Razor UI', 'RBAC', 'CI/CD', 'Git'],
  },
  {
    title: 'Graduate Teaching Assistant',
    company: 'University of North Texas',
    duration: 'Aug 2023 – May 2025',
    location: 'Denton, TX',
    logo: logoPath('/logos/unt.png'),
    initials: 'UNT',
    color: '#10b981',
    current: false,
    summary: 'Instructed 150+ graduate students in Linux, networking, .NET, Azure, and secure coding — 90% pass rate.',
    achievements: [
      'Instructed 150+ students in Linux administration, networking, and shell scripting — 90% pass rate',
      'Taught Git, Agile, and CI/CD workflows — 85% of students hitting production-readiness benchmarks',
      'Delivered PKI encryption & API security training, improving assessment scores by 35%',
      'Guided .NET debugging using Azure and VS Code across 200+ deployments — 50% efficiency gain',
    ],
    tech: ['Linux', '.NET', 'Azure', 'Python', 'SQL', 'ETL', 'Agile', 'CI/CD'],
  },
  {
    title: 'Software Engineer',
    company: 'Deloitte',
    duration: 'Aug 2022 – Aug 2023',
    location: 'Hyderabad, India',
    logo: logoPath('/logos/deloitte.png'),
    initials: 'D',
    color: '#a855f7',
    current: false,
    summary: 'Engineered Omnia and ESG Insights enterprise audit platforms supporting 10,000+ concurrent users.',
    achievements: [
      'Built Omnia & ESG Insights audit platforms (ASP.NET Core, React, Angular, Microservices) — 45% faster page load, 10K+ concurrent users',
      'Designed RESTful APIs cutting response time from 800ms → 400ms, handling 1M+ daily requests',
      'Optimized MySQL & SQL Server schemas (5TB+ audit data) — 55% performance boost via advanced indexing',
      'Integrated Azure Functions, Service Bus & DevOps pipelines — 65% faster deployments, 99.95% uptime',
      'Automated SharePoint workflows reducing manual effort by 70%, resolved 200+ defects',
    ],
    tech: ['ASP.NET Core', 'React', 'Angular', 'Azure', 'SQL Server', 'MySQL', 'Microservices', 'Redux'],
  },
  {
    title: 'Software Engineer',
    company: 'Amigo Smart Tech',
    duration: 'Jan 2019 – Mar 2022',
    location: 'Hyderabad, India',
    logo: logoPath('/logos/amigo.png'),
    initials: 'AS',
    color: '#f59e0b',
    current: false,
    summary: 'Designed a cloud-enabled e-commerce platform supporting $2M+ in monthly transactions.',
    achievements: [
      'Architected e-commerce platform (ASP.NET Core, AWS Lambda, EF Core) — $2M+ monthly transactions, 50K+ users',
      'Implemented async APIs reducing server thread-block by 60%, boosting throughput by 45%',
      'Applied DDD & Onion Architecture — 40% less code coupling, 30% faster feature delivery',
      'Secured with OAuth2 & JWT — 100% enterprise compliance, 95% fewer unauthorized access attempts',
      'Modernized .NET Framework → .NET Core microservices: deployment cycles 2 weeks → 3 days (78% faster)',
    ],
    tech: ['ASP.NET Core', 'AWS Lambda', 'Entity Framework', 'OAuth2', 'JWT', 'MSTest', 'NUnit', 'DDD'],
  },
];

const ExperienceCard = ({ exp, index, inView }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      className="exp-item"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="exp-timeline-dot" style={{ borderColor: exp.color, boxShadow: `0 0 12px ${exp.color}60` }}>
        <div className="exp-dot-inner" style={{ background: exp.color }} />
      </div>

      <div className="exp-card glass-card" onClick={() => setExpanded(e => !e)}>
        <div className="exp-card-header">
          <div className="exp-logo-wrap">
            {exp.logo ? (
              <img src={exp.logo} alt={exp.company} className="exp-logo" />
            ) : (
              <div className="exp-initials" style={{ background: `${exp.color}20`, color: exp.color }}>
                {exp.initials}
              </div>
            )}
          </div>

          <div className="exp-meta">
            <div className="exp-top-row">
              <h3 className="exp-title">{exp.title}</h3>
              {exp.current && <span className="current-badge">Current</span>}
            </div>
            <p className="exp-company" style={{ color: exp.color }}>{exp.company}</p>
            <div className="exp-details-row">
              <span className="exp-detail"><FiCalendar size={12} /> {exp.duration}</span>
              <span className="exp-detail"><FiMapPin size={12} /> {exp.location}</span>
            </div>
            <p className="exp-summary">{exp.summary}</p>
          </div>

          <motion.button
            className="exp-expand-btn"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            onClick={e => { e.stopPropagation(); setExpanded(v => !v); }}
            aria-label="Toggle details"
          >
            <FiChevronDown size={18} />
          </motion.button>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              className="exp-card-body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <ul className="exp-achievements">
                {exp.achievements.map((a, i) => (
                  <li key={i}>
                    <span className="achievement-bullet" style={{ background: exp.color }} />
                    {a}
                  </li>
                ))}
              </ul>
              <div className="exp-tech-row">
                {exp.tech.map(t => (
                  <span key={t} className="exp-tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section className="section exp-section" id="experience">
      <div className="bg-glow" style={{ width: 500, height: 500, background: '#a855f7', top: '-100px', right: '-200px' }} />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">Work Experience</div>
          <h2 className="section-title">Professional <span>Journey</span></h2>
          <p className="section-subtitle">
            6+ years engineering enterprise-grade systems across fintech, healthcare, audit, and e-commerce domains.
          </p>
        </div>

        <div ref={ref} className="exp-timeline">
          <div className="exp-timeline-line" />
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company + i} exp={exp} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

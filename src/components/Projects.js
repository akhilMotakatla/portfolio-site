import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const ALL_FILTERS = ['All', '.NET', 'React', 'Cloud', 'Data'];

const projects = [
  {
    title: 'Enterprise Audit Platform',
    subtitle: 'Omnia & ESG Insights',
    description: 'Full-scale enterprise audit platform built for Deloitte supporting 10,000+ concurrent users. Engineered with ASP.NET Core microservices, React/Redux, and Azure — achieving 1M+ daily API requests at sub-400ms response time.',
    tags: ['.NET', 'React', 'Cloud'],
    tech: ['ASP.NET Core', 'React', 'Redux', 'Azure', 'SQL Server', 'Microservices'],
    metrics: ['10K+ users', '45% faster load', '99.95% uptime'],
    color: '#6366f1',
    icon: '🏢',
    github: 'https://github.com/akhilmotakatla',
    live: null,
  },
  {
    title: 'Cloud E-Commerce Platform',
    subtitle: 'Scalable retail solution',
    description: 'Cloud-native e-commerce solution processing $2M+ monthly transactions for 50K+ active users. Built with ASP.NET Core, AWS Lambda, OAuth2, and distributed caching — scaled 3x under peak load with zero downtime.',
    tags: ['.NET', 'Cloud'],
    tech: ['ASP.NET Core', 'AWS Lambda', 'EF Core', 'OAuth2', 'JWT', 'Redis'],
    metrics: ['$2M+ / month', '50K+ users', '3x scale'],
    color: '#f59e0b',
    icon: '🛒',
    github: 'https://github.com/akhilmotakatla',
    live: null,
  },
  {
    title: 'Healthcare Web Application',
    subtitle: 'Patient workflow platform',
    description: 'N-tier healthcare application serving 5,000+ daily users with Angular front-end and ASP.NET MVC backend. Reduced page load time by 57% and cut query execution time by 45% across 2M+ patient records.',
    tags: ['.NET', 'React'],
    tech: ['ASP.NET MVC', 'Angular', 'C#', 'SQL Server', 'Okta', 'REST API'],
    metrics: ['5K+ daily users', '57% faster load', '45% query gain'],
    color: '#10b981',
    icon: '🏥',
    github: 'https://github.com/akhilmotakatla',
    live: null,
  },
  {
    title: 'Document Management System',
    subtitle: 'Public Housing Authority',
    description: 'Secure document management platform for Public Housing Authorities handling 500K+ documents. Built with ASP.NET MVC and Razor UI — processing 100K+ documents daily with RBAC and Git-based CI/CD deployment.',
    tags: ['.NET', 'Data'],
    tech: ['ASP.NET MVC', 'C#', 'SQL Server', 'Razor', 'RBAC', 'CI/CD'],
    metrics: ['500K+ docs', '50% faster retrieval', 'Zero incidents'],
    color: '#06b6d4',
    icon: '📄',
    github: 'https://github.com/akhilmotakatla',
    live: null,
  },
  {
    title: 'Motel Booking System',
    subtitle: 'Full-stack reservation app',
    description: 'End-to-end hotel reservation system with real-time availability, booking management, and payment integration. Features responsive React UI, RESTful APIs, and SQL Server database with optimized query performance.',
    tags: ['React', '.NET', 'Data'],
    tech: ['React', 'ASP.NET Core', 'SQL Server', 'REST API', 'Bootstrap'],
    metrics: ['Real-time booking', 'Responsive UI', 'Optimized queries'],
    color: '#a855f7',
    icon: '🏨',
    github: 'https://github.com/akhilmotakatla',
    live: null,
  },
  {
    title: 'Loan Management Platform',
    subtitle: 'Financial workflow system',
    description: 'Automated SQL workload migration to Azure using Data Factory. Built a full loan lifecycle management system with real-time analytics dashboards using Power BI integration and secure API endpoints.',
    tags: ['Cloud', 'Data', '.NET'],
    tech: ['Azure Data Factory', 'SQL Server', 'Power BI', 'ASP.NET Core', 'REST API'],
    metrics: ['Automated migration', 'Real-time analytics', 'Azure cloud'],
    color: '#ec4899',
    icon: '💰',
    github: 'https://github.com/akhilmotakatla',
    live: null,
  },
];

const ProjectCard = ({ project, inView, index }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setTilt({ x, y });
  };

  const onMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      className="proj-card glass-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        '--proj-color': project.color,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? 'transform 0.5s ease' : 'none',
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.01 }}
    >
      <div className="proj-card-glow" style={{ background: project.color }} />

      <div className="proj-header">
        <div className="proj-icon-wrap" style={{ background: `${project.color}18`, color: project.color }}>
          <span className="proj-icon">{project.icon}</span>
        </div>
        <div className="proj-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link-btn" aria-label="GitHub">
              <FiGithub size={16} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-link-btn" aria-label="Live demo">
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="proj-body">
        <p className="proj-subtitle">{project.subtitle}</p>
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.description}</p>
      </div>

      <div className="proj-metrics">
        {project.metrics.map(m => (
          <span key={m} className="metric-badge" style={{ color: project.color, background: `${project.color}12`, borderColor: `${project.color}25` }}>
            {m}
          </span>
        ))}
      </div>

      <div className="proj-tech-row">
        {project.tech.slice(0, 5).map(t => (
          <span key={t} className="proj-tech-tag">{t}</span>
        ))}
        {project.tech.length > 5 && <span className="proj-tech-tag">+{project.tech.length - 5}</span>}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter));

  return (
    <section className="section projects-section" id="projects">
      <div className="bg-glow" style={{ width: 600, height: 600, background: '#6366f1', bottom: '-200px', right: '-200px' }} />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">
            Real-world systems built at enterprise scale — from audit platforms to cloud commerce.
          </p>
        </div>

        <div className="proj-filters">
          {ALL_FILTERS.map(f => (
            <motion.button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {f}
            </motion.button>
          ))}
        </div>

        <div ref={ref} className="projects-grid">
          <AnimatePresence mode="wait">
            {filtered.map((p, i) => (
              <ProjectCard key={p.title} project={p} inView={inView} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;

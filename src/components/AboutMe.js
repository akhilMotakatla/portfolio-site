import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FiCode, FiCloud, FiLayers, FiZap } from 'react-icons/fi';
import './AboutMe.css';

const stats = [
  { value: 6, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: '', label: 'Companies' },
  { value: 20, suffix: '+', label: 'Projects Delivered' },
  { value: 99.9, suffix: '%', label: 'Uptime Achieved', decimals: 1 },
];

const pillars = [
  {
    icon: <FiCode size={22} />,
    title: 'Full Stack Development',
    desc: 'End-to-end apps from responsive UIs to robust APIs — deep in .NET Core, C#, ASP.NET, React, and Angular.',
    color: '#6366f1',
  },
  {
    icon: <FiCloud size={22} />,
    title: 'Cloud & DevOps',
    desc: 'Cloud-native systems on Azure & AWS with CI/CD pipelines, Docker, Kubernetes, and serverless functions.',
    color: '#06b6d4',
  },
  {
    icon: <FiLayers size={22} />,
    title: 'Microservices Architecture',
    desc: 'Distributed, loosely-coupled systems using Domain-Driven Design, event-driven messaging, and API-first.',
    color: '#a855f7',
  },
  {
    icon: <FiZap size={22} />,
    title: 'Performance Engineering',
    desc: 'Optimizing databases, APIs, and UIs to achieve sub-400ms response times and 55%+ query improvements.',
    color: '#10b981',
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: 'easeOut' } },
});

const AboutMe = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section about-section" id="about">
      <div className="bg-glow" style={{ width: 600, height: 600, background: '#6366f1', top: '-200px', right: '-200px' }} />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Crafting Digital <span>Excellence</span></h2>
          <p className="section-subtitle">
            A passionate engineer driven by clean architecture, cloud innovation, and measurable impact.
          </p>
        </div>

        <div ref={ref} className="about-stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-card glass-card"
              variants={fadeUp(i * 0.1)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <div className="stat-value">
                {inView ? (
                  <CountUp end={s.value} duration={2.2} decimals={s.decimals || 0} suffix={s.suffix} delay={i * 0.1} />
                ) : '0'}
              </div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="about-body">
          <motion.div
            className="about-bio"
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <h3>Engineering Scalable Solutions at Enterprise Scale</h3>
            <p>
              With 6+ years of hands-on engineering across enterprise audit platforms, healthcare systems,
              e-commerce solutions, and cloud infrastructure, I deliver software that's not just functional —
              but fast, resilient, and built to scale.
            </p>
            <p>
              My experience spans the full stack: architecting microservices on Azure and AWS, building
              high-throughput .NET APIs processing 1M+ daily requests, and crafting React UIs that
              delight users. I've led platform migrations, maintained 99.95% uptime SLAs, and
              pushed 90%+ test coverage across agile teams.
            </p>
            <p>
              I hold a <strong>Master's in Computer and Information Science</strong> from the
              University of North Texas, where I also taught system administration, cloud engineering,
              and secure coding practices to 150+ graduate students.
            </p>
            <div className="about-tech-strip">
              {['.NET Core','C#','React','Azure','AWS','Microservices','Docker','SQL Server','Kubernetes','Angular'].map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </motion.div>

          <div className="about-pillars">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="pillar-card glass-card"
                variants={fadeUp(0.1 * i + 0.3)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
              >
                <div className="pillar-icon" style={{ color: p.color, background: `${p.color}18` }}>
                  {p.icon}
                </div>
                <div className="pillar-content">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

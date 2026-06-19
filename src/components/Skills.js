import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const categories = ['All', 'Backend', 'Frontend', 'Cloud & DevOps', 'Data & DB', 'Tools'];

const logoPath = (path) => process.env.PUBLIC_URL + path;

const skills = [
  // Backend
  { name: 'C# / .NET Core', img: logoPath('/logos/csharp.png'), cat: 'Backend', level: 95 },
  { name: 'ASP.NET Core', img: logoPath('/logos/dotnet.png'), cat: 'Backend', level: 93 },
  { name: 'Web API / REST', img: logoPath('/logos/dotnet.png'), cat: 'Backend', level: 92 },
  { name: 'Python', img: logoPath('/logos/python.png'), cat: 'Backend', level: 78 },
  { name: 'Java', img: logoPath('/logos/nodejs.png'), cat: 'Backend', level: 72 },
  // Frontend
  { name: 'React.js', img: logoPath('/logos/react.png'), cat: 'Frontend', level: 90 },
  { name: 'Angular', img: logoPath('/logos/react.png'), cat: 'Frontend', level: 85 },
  { name: 'JavaScript', img: logoPath('/logos/javascript.png'), cat: 'Frontend', level: 88 },
  { name: 'HTML5 / CSS3', img: logoPath('/logos/html.png'), cat: 'Frontend', level: 90 },
  // Cloud
  { name: 'Microsoft Azure', img: logoPath('/logos/azure.png'), cat: 'Cloud & DevOps', level: 88 },
  { name: 'AWS', img: logoPath('/logos/aws.png'), cat: 'Cloud & DevOps', level: 82 },
  { name: 'Docker', img: logoPath('/logos/docker.png'), cat: 'Cloud & DevOps', level: 85 },
  { name: 'Kubernetes', img: logoPath('/logos/kubernetes.png'), cat: 'Cloud & DevOps', level: 78 },
  { name: 'GitHub Actions', img: logoPath('/logos/github.png'), cat: 'Cloud & DevOps', level: 80 },
  // Data
  { name: 'SQL Server', img: logoPath('/logos/sql.png'), cat: 'Data & DB', level: 92 },
  { name: 'MongoDB', img: logoPath('/logos/sql.png'), cat: 'Data & DB', level: 78 },
  { name: 'Entity Framework', img: logoPath('/logos/dotnet.png'), cat: 'Data & DB', level: 90 },
  { name: 'Power BI', img: logoPath('/logos/powerbi.png'), cat: 'Data & DB', level: 75 },
  // Tools
  { name: 'Git / GitHub', img: logoPath('/logos/github.png'), cat: 'Tools', level: 92 },
  { name: 'Postman / Swagger', img: logoPath('/logos/github.png'), cat: 'Tools', level: 88 },
  { name: 'Visual Studio', img: logoPath('/logos/dotnet.png'), cat: 'Tools', level: 95 },
  { name: 'Node.js', img: logoPath('/logos/nodejs.png'), cat: 'Tools', level: 70 },
];

const GLOW_COLORS = {
  Backend: '#6366f1',
  Frontend: '#06b6d4',
  'Cloud & DevOps': '#a855f7',
  'Data & DB': '#f59e0b',
  Tools: '#10b981',
};

const SkillCard = ({ skill, inView, index }) => {
  const color = GLOW_COLORS[skill.cat] || '#6366f1';
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
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
    card.style.transition = 'transform 0.08s ease';
    const glow = card.querySelector('.skill-card-glow');
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
    card.style.transition = 'transform 0.5s ease';
    const glow = card.querySelector('.skill-card-glow');
    if (glow) glow.style.opacity = '0';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: 10, transition: { duration: 0.25 } }}
      transition={{ delay: index * 0.04, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        ref={cardRef}
        className="skill-card glass-card"
        style={{ '--skill-color': color }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Cursor spotlight glow */}
        <div className="skill-card-glow" style={{ background: color }} />

        <div className="skill-card-top">
          <div className="skill-img-wrap">
            <img src={skill.img} alt={skill.name} className="skill-img" loading="lazy" />
          </div>
          <div className="skill-info">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-pct">{skill.level}%</span>
          </div>
        </div>
        <div className="skill-bar-bg">
          <motion.div
            className="skill-bar-fill"
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ delay: index * 0.04 + 0.3, duration: 1, ease: 'easeOut' }}
            style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
          />
        </div>
        <span className="skill-cat-badge" style={{ color, background: `${color}15`, borderColor: `${color}30` }}>
          {skill.cat}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const filtered = activeFilter === 'All' ? skills : skills.filter(s => s.cat === activeFilter);

  return (
    <section className="section skills-section" id="skills">
      <div className="bg-glow" style={{ width: 500, height: 500, background: '#06b6d4', bottom: '-150px', left: '-150px' }} />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">Technical Skills</div>
          <h2 className="section-title">My <span>Arsenal</span></h2>
          <p className="section-subtitle">
            A curated set of technologies I use to engineer resilient, high-performance systems.
          </p>
        </div>

        <div className="skills-filters">
          {categories.map(cat => (
            <motion.button
              key={cat}
              className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div ref={ref} className="skills-grid">
          <AnimatePresence>
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} inView={inView} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;

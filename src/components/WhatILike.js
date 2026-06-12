import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './WhatILike.css';

const interests = [
  {
    emoji: '💻',
    title: 'Exploring Tech',
    subtitle: 'Always learning',
    description: 'Diving into new frameworks, tools, and paradigms keeps me sharp. From AI models to edge computing, I love being at the bleeding edge.',
    image: `${process.env.PUBLIC_URL}/logos/tech.jpg`,
    color: '#6366f1',
    tags: ['AI / ML', 'Open Source', 'System Design'],
  },
  {
    emoji: '🎨',
    title: 'Building UIs',
    subtitle: 'Pixel-perfect craft',
    description: 'Designing sleek, responsive interfaces that feel alive. Great UX is invisible — and making that magic is what I truly love.',
    image: `${process.env.PUBLIC_URL}/logos/ui.jpg`,
    color: '#a855f7',
    tags: ['React', 'Motion Design', 'Accessibility'],
  },
  {
    emoji: '✈️',
    title: 'Traveling',
    subtitle: 'World explorer',
    description: 'Every new city resets my perspective. I find that travel unlocks creativity and fuels my best engineering ideas.',
    image: `${process.env.PUBLIC_URL}/logos/travel.jpg`,
    color: '#c9a85c',
    tags: ['6 States', 'Road Trips', 'Culture'],
  },
  {
    emoji: '🎮',
    title: 'Gaming',
    subtitle: 'Strategy & worlds',
    description: 'Strategy and open-world games are my way to unwind. They sharpen problem-solving skills in ways that directly transfer to engineering.',
    image: `${process.env.PUBLIC_URL}/logos/gaming.jpg`,
    color: '#10b981',
    tags: ['Strategy', 'Open World', 'Co-op'],
  },
  {
    emoji: '☁️',
    title: 'Cloud Architecture',
    subtitle: 'Infra nerd',
    description: 'Designing distributed systems on Azure and AWS is genuinely exciting to me — the elegance of a well-architected cloud solution is its own art form.',
    image: `${process.env.PUBLIC_URL}/logos/tech.jpg`,
    color: '#06b6d4',
    tags: ['Azure', 'AWS', 'Kubernetes'],
  },
  {
    emoji: '☕',
    title: 'Coffee & Coding',
    subtitle: 'Deep focus',
    description: 'Some of my best code is written at 11pm with a great cup of coffee. There\'s a ritual to it — the quiet, the flow state, the satisfaction.',
    image: `${process.env.PUBLIC_URL}/logos/ui.jpg`,
    color: '#f59e0b',
    tags: ['Side Projects', 'Open Source', 'Flow State'],
  },
];

const InterestCard = ({ item, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -10;
    const rotY = ((x - cx) / cx) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
    card.style.transition = 'transform 0.1s ease';
    // Move the glow spotlight
    const glow = card.querySelector('.wil-card-glow');
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
    card.style.transition = 'transform 0.5s ease';
    const glow = card.querySelector('.wil-card-glow');
    if (glow) glow.style.opacity = '0';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.1, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        ref={cardRef}
        className="wil-card"
        style={{ '--card-color': item.color }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Radial glow that follows cursor */}
        <div className="wil-card-glow" style={{ background: item.color }} />

        {/* Background image with overlay */}
        <div className="wil-card-bg">
          <img src={item.image} alt={item.title} className="wil-card-img" />
          <div className="wil-card-img-overlay" style={{ background: `linear-gradient(to top, ${item.color}cc 0%, rgba(0,0,8,0.85) 100%)` }} />
        </div>

        {/* 3D floating emoji */}
        <div className="wil-emoji-wrap" style={{ background: `${item.color}20`, borderColor: `${item.color}40` }}>
          <span className="wil-emoji">{item.emoji}</span>
        </div>

        {/* Content */}
        <div className="wil-card-content">
          <p className="wil-subtitle" style={{ color: item.color }}>{item.subtitle}</p>
          <h3 className="wil-title">{item.title}</h3>
          <p className="wil-desc">{item.description}</p>
          <div className="wil-tags">
            {item.tags.map(tag => (
              <span key={tag} className="wil-tag" style={{ borderColor: `${item.color}40`, color: item.color, background: `${item.color}10` }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom color bar */}
        <div className="wil-bottom-bar" style={{ background: item.color }} />
      </div>
    </motion.div>
  );
};

const WhatILike = () => {
  const [ref] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="what-i-like" className="section wil-section">
      <div className="bg-glow" style={{ width: 600, height: 600, background: '#a855f7', top: '-200px', left: '-200px' }} />
      <div className="bg-glow" style={{ width: 400, height: 400, background: '#c9a85c', bottom: '-100px', right: '-100px' }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="section-tag">Beyond Work</div>
          <h2 className="section-title">What I <span>Love Doing</span></h2>
          <p className="section-subtitle">
            The passions and interests that fuel my creativity, keep me curious, and make me a better engineer.
          </p>
        </motion.div>

        <div ref={ref} className="wil-grid">
          {interests.map((item, i) => (
            <InterestCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatILike;

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const PARTICLE_CONFIG = {
  count: 80,
  maxSpeed: 0.4,
  connectRadius: 120,
  dotRadius: 1.5,
};

const useParticles = (canvasRef) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * PARTICLE_CONFIG.maxSpeed,
      vy: (Math.random() - 0.5) * PARTICLE_CONFIG.maxSpeed,
      r: Math.random() * PARTICLE_CONFIG.dotRadius + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    });

    const init = () => {
      resize();
      particles = Array.from({ length: PARTICLE_CONFIG.count }, createParticle);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < PARTICLE_CONFIG.connectRadius) {
            const alpha = (1 - dist / PARTICLE_CONFIG.connectRadius) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        if (mouse.x !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouse = { x: null, y: null }; };

    init();
    draw();

    window.addEventListener('resize', init);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', init);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [canvasRef]);
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15 + 0.3, duration: 0.6, ease: 'easeOut' } }),
};

const Hero = () => {
  const canvasRef = useRef(null);
  useParticles(canvasRef);

  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="hero-content">
        <div className="hero-left">
          <motion.div
            className="hero-badge"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span className="hero-status-dot" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            className="hero-name"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            Hi, I'm <span className="gradient-text">Akhil Reddy</span>
          </motion.h1>

          <motion.div
            className="hero-role"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            <TypeAnimation
              sequence={[
                'Senior Full Stack Developer', 2500,
                '.NET & Cloud Engineer', 2500,
                'React & Azure Specialist', 2500,
                'Microservices Architect', 2500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typed-text"
            />
          </motion.div>

          <motion.p
            className="hero-description"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
          >
            Engineering scalable, cloud-native applications with 6+ years of expertise.
            Specialized in <strong>.NET Core</strong>, <strong>React</strong>, <strong>Azure</strong>,
            and <strong>microservices</strong> — turning complex business requirements into elegant,
            high-performance systems.
          </motion.p>

          <motion.div
            className="hero-cta"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
          >
            <a href="#contact" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <FiMail size={16} />
              Hire Me
            </a>
            <a href={process.env.PUBLIC_URL + "/logos/Akhil_Resume.pdf"} className="btn-outline" download>
              <FiDownload size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
          >
            {[
              { icon: <FiGithub size={20} />, href: 'https://github.com/akhilmotakatla', label: 'GitHub' },
              { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/akhil-reddy-motakatla', label: 'LinkedIn' },
              { icon: <FiMail size={20} />, href: 'mailto:akhilreddy7894112@gmail.com', label: 'Email' },
            ].map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'backOut' }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-ring hero-image-ring-1" />
            <div className="hero-image-ring hero-image-ring-2" />
            <div className="hero-image-ring hero-image-ring-3" />
            <div className="hero-image-container">
              <img src={process.env.PUBLIC_URL + "/logos/profile.jpeg"} alt="Akhil Reddy Motakatla" className="hero-image" />
            </div>

            <motion.div
              className="hero-float-card hero-float-card-1"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="float-card-icon">⚡</span>
              <div>
                <p className="float-card-value">6+</p>
                <p className="float-card-label">Years Exp.</p>
              </div>
            </motion.div>

            <motion.div
              className="hero-float-card hero-float-card-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="float-card-icon">🚀</span>
              <div>
                <p className="float-card-value">20+</p>
                <p className="float-card-label">Projects</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="hero-scroll-cta"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;

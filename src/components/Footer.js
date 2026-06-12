import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <motion.div
      className="footer-content"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="footer-logo">
        <span className="footer-badge">AR</span>
        <span>Akhil Reddy Motakatla</span>
      </div>
      <div className="footer-divider" />
      <p className="footer-copy">
        © {new Date().getFullYear()} Akhil Reddy Motakatla. Built with React &amp; Framer Motion.
      </p>
      <p className="footer-tagline">Engineered with ♥ for performance &amp; excellence</p>
    </motion.div>
  </footer>
);

export default Footer;

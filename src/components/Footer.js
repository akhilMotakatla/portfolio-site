import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <span className="footer-badge">AR</span>
        <span>Akhil Reddy Motakatla</span>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} Akhil Reddy Motakatla. Built with React & Framer Motion.
      </p>
      <p className="footer-tagline">Engineered with ♥ for performance &amp; excellence</p>
    </div>
  </footer>
);

export default Footer;

import React from 'react';
import '../styles/contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <div className="contact-icons">
        <a href="mailto:akhil@example.com" target="_blank" rel="noreferrer">
          <FaEnvelope /> 
        </a>
        <a href="https://linkedin.com/in/akhilreddy" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/akhilreddy" target="_blank" rel="noreferrer">
          <FaGithub /> 
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
          <FaWhatsapp /> 
        </a>
        <a href="https://instagram.com/akhilreddy" target="_blank" rel="noreferrer">
          <FaInstagram /> 
        </a>
        <a href="https://twitter.com/akhilreddy" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}

export default Contact;

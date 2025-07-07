import React from 'react';
import '../styles/contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <div className="contact-icons">
        <a href="mailto:akhilreddy7894112@example.com" target="_blank" rel="noreferrer" className="email">
          <FaEnvelope /> 
        </a>
        <a href="https://linkedin.com/in/akhil-reddy-motakatla" target="_blank" rel="noreferrer" className="linkedin">
          <FaLinkedin /> 
        </a>
        <a href="https://github.com/akhilmotakatla" target="_blank" rel="noreferrer" className="github">
          <FaGithub /> 
        </a>
        <a href="https://wa.me/19406296557" target="_blank" rel="noreferrer" className="whatsapp">
          <FaWhatsapp /> 
        </a>
        <a href="https://instagram.com/akhilreddy" target="_blank" rel="noreferrer" className="instagram">
          <FaInstagram /> 
        </a>
        <a href="https://x.com/motakatla_akhil" target="_blank" rel="noreferrer" className="twitter">
          <RiTwitterXFill /> 
        </a>
      </div>
    </section>
  );
}

export default Contact;

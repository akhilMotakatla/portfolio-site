import React from 'react';
import '../styles/contact.css';
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaInstagram, FaCalendarAlt } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      
      <div className="contact-icons">
        <a href="mailto:akhilreddy7894112@gmail.com" target="_blank" rel="noreferrer" className="email">
          <FaEnvelope /> 
        </a>
        <a href="https://linkedin.com/in/akhil-reddy-motakatla" target="_blank" rel="noreferrer" className="linkedin">
          <FaLinkedin /> 
        </a>
       
        <a href="https://wa.me/19406296557" target="_blank" rel="noreferrer" className="whatsapp">
          <FaWhatsapp /> 
        </a>
        <a href="https://instagram.com/_m_akhil_reddy_" target="_blank" rel="noreferrer" className="instagram">
          <FaInstagram /> 
        </a>
        <a href="https://x.com/motakatla_akhil" target="_blank" rel="noreferrer" className="twitter">
          <RiTwitterXFill /> 
        </a>
        <a
          href="https://calendly.com/akhilreddymotakatla" target="_blank" rel="noreferrer" className="calender" >
         <FaCalendarAlt />
        </a>
      </div>
    </section>
  );
}

export default Contact;

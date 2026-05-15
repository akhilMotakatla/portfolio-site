import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiMapPin, FiCalendar } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import './Contact.css';

const contactInfo = [
  { icon: <FiMail size={18} />, label: 'Email', value: 'akhilreddy7894112@gmail.com', href: 'mailto:akhilreddy7894112@gmail.com', color: '#ea4335' },
  { icon: <FiPhone size={18} />, label: 'Phone', value: '+1 (940) 629-6557', href: 'tel:+19406296557', color: '#10b981' },
  { icon: <FiMapPin size={18} />, label: 'Location', value: 'United States', href: null, color: '#6366f1' },
];

const socials = [
  { icon: <FiLinkedin size={20} />, label: 'LinkedIn', href: 'https://linkedin.com/in/akhil-reddy-motakatla', color: '#0a66c2' },
  { icon: <FiGithub size={20} />, label: 'GitHub', href: 'https://github.com/akhilmotakatla', color: '#f1f5f9' },
  { icon: <FaWhatsapp size={20} />, label: 'WhatsApp', href: 'https://wa.me/19406296557', color: '#25d366' },
  { icon: <FaInstagram size={20} />, label: 'Instagram', href: 'https://instagram.com/_m_akhil_reddy_', color: '#e1306c' },
  { icon: <RiTwitterXFill size={20} />, label: 'X / Twitter', href: 'https://x.com/motakatla_akhil', color: '#f1f5f9' },
  { icon: <FiCalendar size={20} />, label: 'Schedule Call', href: 'https://calendly.com/akhilreddymotakatla', color: '#06b6d4' },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

const FloatingInput = ({ label, type = 'text', name, value, onChange, required }) => {
  const hasValue = value.length > 0;
  return (
    <div className={`float-field${hasValue ? ' has-value' : ''}`}>
      <input type={type} name={name} value={value} onChange={onChange} required={required} autoComplete="off" className="float-input" />
      <label className="float-label">{label}</label>
      <div className="float-border" />
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus(null), 4000);
    }, 1500);
  };

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { delay, duration: 0.5, ease: 'easeOut' } },
  });

  return (
    <section className="section contact-section" id="contact">
      <div className="bg-glow" style={{ width: 500, height: 500, background: '#06b6d4', top: '-100px', right: '-150px' }} />

      <div className="container">
        <div className="section-header">
          <div className="section-tag">Contact</div>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <p className="section-subtitle">
            Open to senior engineering roles, consulting, and exciting collaborations. Let's build something remarkable.
          </p>
        </div>

        <div ref={ref} className="contact-layout">
          {/* Info Panel */}
          <motion.div
            className="contact-info"
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <div className="contact-info-card glass-card">
              <h3>Get in Touch</h3>
              <p>I'm actively exploring senior full-stack and cloud engineering opportunities. Reach out — I typically respond within 24 hours.</p>

              <div className="contact-items">
                {contactInfo.map(item => (
                  <div key={item.label} className="contact-item">
                    <div className="contact-item-icon" style={{ color: item.color, background: `${item.color}15` }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="contact-item-label">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="contact-item-value">{item.value}</a>
                      ) : (
                        <p className="contact-item-value">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-divider" />

              <div className="socials-row">
                {socials.map(s => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ '--social-color': s.color }}
                    title={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <form className="contact-form glass-card" onSubmit={handleSubmit} noValidate>
              <h3>Send a Message</h3>

              <div className="form-row-2">
                <FloatingInput label="Your Name" name="name" value={form.name} onChange={handleChange} required />
                <FloatingInput label="Email Address" type="email" name="email" value={form.email} onChange={handleChange} required />
              </div>

              <FloatingInput label="Subject" name="subject" value={form.subject} onChange={handleChange} required />

              <div className={`float-field float-textarea${form.message.length > 0 ? ' has-value' : ''}`}>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="float-input float-input-ta" />
                <label className="float-label">Your Message</label>
                <div className="float-border" />
              </div>

              <motion.button
                type="submit"
                className="btn-primary submit-btn"
                disabled={status === 'sending' || status === 'sent'}
                whileHover={{ scale: status ? 1 : 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {status === 'sending' ? (
                  <><span className="spinner" /> Sending...</>
                ) : status === 'sent' ? (
                  <><span>✓</span> Message Sent!</>
                ) : (
                  <><FiSend size={16} /> Send Message</>
                )}
              </motion.button>

              {status === 'sent' && (
                <motion.p className="form-success" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  Thanks! I'll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

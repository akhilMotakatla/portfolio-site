import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiMapPin, FiCalendar, FiAlertCircle } from 'react-icons/fi';
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

const INITIAL_FORM   = { name: '', email: '', subject: '', message: '' };
const INITIAL_ERRORS = { name: '', email: '', subject: '', message: '' };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── Validate all fields, return errors object ──
const validate = ({ name, email, subject, message }) => {
  const errors = { ...INITIAL_ERRORS };
  if (!name.trim())                       errors.name    = 'Name is required.';
  if (!email.trim())                      errors.email   = 'Email is required.';
  else if (!EMAIL_REGEX.test(email))      errors.email   = 'Please enter a valid email address.';
  if (!subject.trim())                    errors.subject = 'Subject is required.';
  if (!message.trim())                    errors.message = 'Message cannot be empty.';
  else if (message.trim().length < 10)    errors.message = 'Message must be at least 10 characters.';
  return errors;
};

const hasErrors = (errors) => Object.values(errors).some(Boolean);

// ── Floating label input with inline error ──
const FloatingInput = ({ label, type = 'text', name, value, onChange, error, onBlur }) => {
  const hasValue = value.length > 0;
  return (
    <div className={`float-field${hasValue ? ' has-value' : ''}${error ? ' has-error' : ''}`}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
        className="float-input"
        aria-describedby={error ? `${name}-error` : undefined}
      />
      <label className="float-label">{label}</label>
      <div className="float-border" />
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${name}-error`}
            className="field-error"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <FiAlertCircle size={12} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  const [form,    setForm]    = useState(INITIAL_FORM);
  const [errors,  setErrors]  = useState(INITIAL_ERRORS);
  const [touched, setTouched] = useState({ name: false, email: false, subject: false, message: false });
  const [status,  setStatus]  = useState(null); // null | 'sending' | 'sent'
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  // Update field + clear its error in real time
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    // Re-validate just this field live once it's been touched
    if (touched[name]) {
      const freshErrors = validate({ ...form, [name]: value });
      setErrors(prev => ({ ...prev, [name]: freshErrors[name] }));
    }
  };

  // Mark field as touched on blur and show its error immediately
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(t => ({ ...t, [name]: true }));
    const freshErrors = validate(form);
    setErrors(prev => ({ ...prev, [name]: freshErrors[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark every field as touched so all errors show
    setTouched({ name: true, email: true, subject: true, message: true });

    const freshErrors = validate(form);
    setErrors(freshErrors);

    // ── STOP here if anything is invalid ──
    if (hasErrors(freshErrors)) return;

    // All good — simulate sending
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm(INITIAL_FORM);
      setErrors(INITIAL_ERRORS);
      setTouched({ name: false, email: false, subject: false, message: false });
      setTimeout(() => setStatus(null), 5000);
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
          {/* ── Info Panel ── */}
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
                      {item.href
                        ? <a href={item.href} className="contact-item-value">{item.value}</a>
                        : <p className="contact-item-value">{item.value}</p>
                      }
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

          {/* ── Contact Form ── */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <form className="contact-form glass-card" onSubmit={handleSubmit} noValidate>
              <h3>Send a Message</h3>

              <div className="form-row-2">
                <FloatingInput
                  label="Your Name *"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name ? errors.name : ''}
                />
                <FloatingInput
                  label="Email Address *"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email ? errors.email : ''}
                />
              </div>

              <FloatingInput
                label="Subject *"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.subject ? errors.subject : ''}
              />

              {/* Textarea */}
              <div className={`float-field float-textarea${form.message.length > 0 ? ' has-value' : ''}${touched.message && errors.message ? ' has-error' : ''}`}>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  className="float-input float-input-ta"
                />
                <label className="float-label">Your Message *</label>
                <div className="float-border" />
                <AnimatePresence>
                  {touched.message && errors.message && (
                    <motion.p
                      className="field-error"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiAlertCircle size={12} />
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                type="submit"
                className="btn-primary submit-btn"
                disabled={status === 'sending' || status === 'sent'}
                whileHover={{ scale: (status === 'sending' || status === 'sent') ? 1 : 1.03 }}
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

              <AnimatePresence>
                {status === 'sent' && (
                  <motion.p
                    className="form-success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    ✅ Thanks! I'll get back to you within 24 hours.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

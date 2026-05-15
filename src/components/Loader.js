import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return p + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="loader-content">
            <motion.div
              className="loader-logo"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'backOut' }}
            >
              <span>AR</span>
            </motion.div>

            <motion.div
              className="loader-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1>Akhil Reddy</h1>
              <p>Full Stack Engineer</p>
            </motion.div>

            <motion.div
              className="loader-bar-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="loader-bar">
                <motion.div
                  className="loader-fill"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <span className="loader-pct">{Math.min(Math.floor(progress), 100)}%</span>
            </motion.div>
          </div>

          <div className="loader-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="loader-particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

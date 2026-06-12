import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import './VideoIntro.css';

const VideoIntro = () => {
  const videoRef = useRef(null);
  const [ended, setEnded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-play muted immediately on mount (browser requirement for autoplay)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
  };

  const scrollIntoPortfolio = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="video-intro" id="intro">

      {/* ── Video — auto-plays muted immediately ── */}
      <video
        ref={videoRef}
        className="vi-video"
        src={process.env.PUBLIC_URL + '/intro.mp4'}
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setEnded(true)}
      />

      {/* ── Cinematic vignette ── */}
      <div className="vi-vignette" />

      {/* ── Name / title overlay ── */}
      <motion.div
        className="vi-name-overlay"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.1, ease: 'easeOut' }}
      >
        <p className="vi-greeting">Welcome to the portfolio of</p>
        <h1 className="vi-name">
          Akhil Reddy<br /><span>Motakatla</span>
        </h1>
        <p className="vi-title">Senior Full Stack Engineer · .NET · React · Azure · AWS</p>
      </motion.div>

      {/* ── Progress bar ── */}
      {!ended && (
        <div className="vi-progress-track">
          <div className="vi-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* ── Scroll CTA — appears when video ends ── */}
      <AnimatePresence>
        {ended && (
          <motion.div
            className="vi-scroll-cta"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              className="vi-scroll-ring"
              animate={{ scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.button
              className="vi-scroll-btn"
              onClick={scrollIntoPortfolio}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
            >
              <motion.span
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FiArrowDown size={26} />
              </motion.span>
            </motion.button>
            <motion.p
              className="vi-scroll-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Scroll to Explore
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoIntro;

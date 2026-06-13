import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import './VideoIntro.css';

const VideoIntro = () => {
  const videoRef = useRef(null);
  const [ended, setEnded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Start muted immediately so video loads and plays in background
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  const handleEnterWithSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setSoundEnabled(true);
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
  };

  const scrollIntoPortfolio = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="video-intro" id="intro">

      {/* ── Video ── */}
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

      {/* ── Full-screen sound gate overlay ── */}
      <AnimatePresence>
        {!soundEnabled && (
          <motion.div
            className="vi-sound-gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            onClick={handleEnterWithSound}
          >
            <motion.div
              className="vi-sound-gate-inner"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Animated sound wave rings */}
              <div className="vi-gate-rings">
                <motion.div className="vi-gate-ring" animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0 }} />
                <motion.div className="vi-gate-ring" animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }} />
                <motion.div className="vi-gate-ring" animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }} />
                <div className="vi-gate-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                </div>
              </div>

              <p className="vi-gate-label">Click anywhere for sound</p>
              <p className="vi-gate-sub">Best experienced with audio</p>

              <motion.div
                className="vi-gate-btn"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
              >
                Enter with Sound
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import './VideoIntro.css';

const VideoIntro = () => {
  const videoRef = useRef(null);
  const [phase, setPhase] = useState('splash'); // 'splash' | 'playing' | 'ended'
  const [progress, setProgress] = useState(0);

  // User taps the Enter screen → play video with sound
  const handleEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    video
      .play()
      .then(() => setPhase('playing'))
      .catch(() => {
        // Fallback: play muted if sound is still blocked
        video.muted = true;
        video.play().then(() => setPhase('playing'));
      });
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

      {/* ── Video (preloaded but not auto-playing) ── */}
      <video
        ref={videoRef}
        className="vi-video"
        src={process.env.PUBLIC_URL + '/intro.mp4'}
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setPhase('ended')}
      />

      {/* ── Vignette ── */}
      <div className="vi-vignette" />

      {/* ── PHASE: Splash — Enter screen ── */}
      <AnimatePresence>
        {phase === 'splash' && (
          <motion.div
            key="splash"
            className="vi-splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            onClick={handleEnter}
          >
            {/* Animated background rings */}
            <div className="vi-splash-ring vi-splash-ring-1" />
            <div className="vi-splash-ring vi-splash-ring-2" />
            <div className="vi-splash-ring vi-splash-ring-3" />

            <motion.div
              className="vi-splash-content"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                className="vi-splash-logo"
                animate={{ boxShadow: ['0 0 30px rgba(99,102,241,0.5)', '0 0 70px rgba(168,85,247,0.7)', '0 0 30px rgba(99,102,241,0.5)'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                AR
              </motion.div>

              <p className="vi-splash-greeting">Welcome to the portfolio of</p>
              <h1 className="vi-splash-name">
                Akhil Reddy<br />
                <span>Motakatla</span>
              </h1>
              <p className="vi-splash-role">Senior Full Stack Engineer · .NET · React · Azure · AWS</p>

              <motion.button
                className="vi-enter-btn"
                onClick={handleEnter}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="vi-enter-play">▶</span>
                Enter Portfolio
              </motion.button>

              <p className="vi-splash-hint">Click to play intro with sound</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PHASE: Playing — name overlay + progress bar ── */}
      <AnimatePresence>
        {phase === 'playing' && (
          <>
            <motion.div
              key="overlay"
              className="vi-name-overlay"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
            >
              <p className="vi-greeting">Welcome to the portfolio of</p>
              <h1 className="vi-name">
                Akhil Reddy<br /><span>Motakatla</span>
              </h1>
              <p className="vi-title">Senior Full Stack Engineer · .NET · React · Azure · AWS</p>
            </motion.div>

            <div className="vi-progress-track">
              <div className="vi-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </>
        )}
      </AnimatePresence>

      {/* ── PHASE: Ended — Scroll CTA ── */}
      <AnimatePresence>
        {phase === 'ended' && (
          <motion.div
            key="cta"
            className="vi-scroll-cta"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
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

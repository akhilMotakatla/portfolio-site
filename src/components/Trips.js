import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin } from 'react-icons/fi';
import '../styles/trips.css';

const trips = [
  {
    place: 'New York City',
    state: 'New York',
    flag: '🗽',
    image: `${process.env.PUBLIC_URL}/logos/newyork.png`,
    description: 'Explored the iconic skyline, Times Square energy, and the peaceful expanse of Central Park.',
    color: '#6366f1',
    highlight: 'Manhattan · Brooklyn · Central Park',
  },
  {
    place: 'Louisiana',
    state: 'The Pelican State',
    flag: '🎷',
    image: `${process.env.PUBLIC_URL}/logos/lousiana.png`,
    description: 'Soaked in the rich jazz culture, incredible Creole cuisine, and the vibrant soul of New Orleans.',
    color: '#a855f7',
    highlight: 'New Orleans · French Quarter · Bayou',
  },
  {
    place: 'Georgia',
    state: 'The Peach State',
    flag: '🍑',
    image: `${process.env.PUBLIC_URL}/logos/georgia.png`,
    description: 'Visited Atlanta\'s rich history, the Georgia Aquarium, and the breathtaking Blue Ridge Mountains.',
    color: '#c9a85c',
    highlight: 'Atlanta · Blue Ridge · Savannah',
  },
  {
    place: 'Florida',
    state: 'The Sunshine State',
    flag: '🌴',
    image: `${process.env.PUBLIC_URL}/logos/florida.png`,
    description: 'Sun-soaked beaches, vibrant Miami nightlife, and the magic of Orlando theme parks.',
    color: '#06b6d4',
    highlight: 'Miami · Orlando · Key West',
  },
  {
    place: 'Missouri',
    state: 'The Gateway State',
    flag: '🌉',
    image: `${process.env.PUBLIC_URL}/logos/missouri.png`,
    description: 'Stood beneath the iconic Gateway Arch and explored the rich history of the American frontier.',
    color: '#10b981',
    highlight: 'St. Louis · Gateway Arch · Ozarks',
  },
  {
    place: 'Texas',
    state: 'The Lone Star State',
    flag: '⭐',
    image: `${process.env.PUBLIC_URL}/logos/texas.png`,
    description: 'Home base — deep in the heart of Texas. BBQ, live music in Austin, and endless highways.',
    color: '#f59e0b',
    highlight: 'Dallas · Austin · San Antonio',
  },
];

const TripCard = ({ trip, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -8;
    const rotY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
    card.style.transition = 'transform 0.08s ease';
    const shine = card.querySelector('.trip-shine');
    if (shine) {
      const pctX = (x / rect.width) * 100;
      const pctY = (y / rect.height) * 100;
      shine.style.background = `radial-gradient(circle at ${pctX}% ${pctY}%, rgba(255,255,255,0.08), transparent 60%)`;
      shine.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.transition = 'transform 0.6s ease';
    const shine = card.querySelector('.trip-shine');
    if (shine) shine.style.opacity = '0';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        ref={cardRef}
        className="trip-card-new"
        style={{ '--trip-color': trip.color }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Shine overlay */}
        <div className="trip-shine" />

        {/* Image */}
        <div className="trip-img-wrap">
          <img src={trip.image} alt={trip.place} className="trip-img-new" />
          <div className="trip-img-gradient" style={{ background: `linear-gradient(to top, rgba(2,2,9,0.95) 0%, rgba(2,2,9,0.4) 50%, transparent 100%)` }} />
        </div>

        {/* Location pin badge */}
        <div className="trip-pin" style={{ background: `${trip.color}20`, borderColor: `${trip.color}50` }}>
          <FiMapPin size={12} style={{ color: trip.color }} />
          <span style={{ color: trip.color }}>{trip.state}</span>
        </div>

        {/* Flag */}
        <div className="trip-flag">{trip.flag}</div>

        {/* Content */}
        <div className="trip-content-new">
          <h3 className="trip-place">{trip.place}</h3>
          <p className="trip-highlight" style={{ color: trip.color }}>{trip.highlight}</p>
          <p className="trip-desc-new">{trip.description}</p>
        </div>

        {/* Bottom glow line */}
        <div className="trip-bottom-line" style={{ background: `linear-gradient(90deg, transparent, ${trip.color}, transparent)` }} />
      </div>
    </motion.div>
  );
};

function Trips() {
  const [ref] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="trips" className="section trips-section">
      <div className="bg-glow" style={{ width: 500, height: 500, background: '#6366f1', top: '-150px', right: '-100px' }} />
      <div className="bg-glow" style={{ width: 400, height: 400, background: '#c9a85c', bottom: '-100px', left: '-100px' }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="section-tag">Adventures</div>
          <h2 className="section-title">Where I've <span>Explored</span></h2>
          <p className="section-subtitle">
            Every destination left a mark — on my perspective, my creativity, and my engineering mindset.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="trips-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {[
            { value: '6+', label: 'States Visited' },
            { value: '10+', label: 'Cities Explored' },
            { value: '3', label: 'Countries' },
            { value: '∞', label: 'Memories Made' },
          ].map(stat => (
            <div key={stat.label} className="trips-stat">
              <span className="trips-stat-value">{stat.value}</span>
              <span className="trips-stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <div ref={ref} className="trips-grid">
          {trips.map((trip, i) => (
            <TripCard key={trip.place} trip={trip} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trips;

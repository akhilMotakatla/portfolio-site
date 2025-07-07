import React from 'react';
import '../styles/trips.css';

const trips = [
  {
    place: 'New York City',
    image: '/trips/newyork.png',
    description: 'Explored the skyline, Times Square, and Central Park.'
  },
  {
    place: 'Lousiana',
    image: '/trips/lousiana.png',
    description: 'Visited Golden Gate Bridge and Silicon Valley.'
  },
  {
    place: 'Georgia',
    image: '/trips/georgia.png',
    description: 'Deep-dish pizza and the Cloud Gate!'
  },
  {
    place: 'Florida',
    image: '/trips/florida.png',
    description: 'Rainy days and amazing coffee at Pike Place.'
  },
  {
    place: 'Missouri',
    image: '/trips/missouri.png',
    description: 'Rainy days and amazing coffee at Pike Place.'
  },
  {
    place: 'Texas',
    image: '/trips/texas.png',
    description: 'Rainy days and amazing coffee at Pike Place.'
  },
];

function Trips() {
  return (
    <section className="trips">
      <h2>Where did I Go!</h2>
      <div className="trip-grid">
        {trips.map((trip, index) => (
          <div className="trip-card" key={index}>
            <img src={trip.image} alt={trip.place} />
            <div className="trip-content">
              <h3>{trip.place}</h3>
              <p>{trip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trips;

import React from 'react';
import '../styles/whatILike.css';

const likes = [
  { 
    title: 'Exploring Tech', 
    image: '/images/tech.jpg',
    description: 'I love diving into new technologies and experimenting with innovative tools.'
  },
  { 
    title: 'Building UIs', 
    image: '/images/ui.jpg',
    description: 'Designing sleek, responsive interfaces is something I truly enjoy.'
  },
  { 
    title: 'Traveling', 
    image: '/images/travel.jpg',
    description: 'Exploring different cultures and places helps me stay creative and inspired.'
  },
  { 
    title: 'Gaming', 
    image: '/images/gaming.jpg',
    description: 'I unwind by playing strategy and open-world games.'
  },
];

function WhatILike() {
  return (
    <section className="what-i-like">
      <h2>What I Like to Do</h2>
      <div className="like-grid">
        {likes.map((like, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={like.image} alt={like.title} />
              </div>
              <div className="card-back">
                <h3>{like.title}</h3>
                <p>{like.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatILike;

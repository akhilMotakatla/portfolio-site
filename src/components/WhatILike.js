import React from 'react';
import './WhatILike.css';

const likes = [
  { 
    title: 'Exploring Tech', 
    image: `${process.env.PUBLIC_URL}/logos/tech.jpg`,
    description: 'I love diving into new technologies and experimenting with innovative tools.'
  },
  { 
    title: 'Building UIs', 
    image: `${process.env.PUBLIC_URL}/logos/ui.jpg`,
    description: 'Designing sleek, responsive interfaces is something I truly enjoy.'
  },
  { 
    title: 'Traveling', 
    image: `${process.env.PUBLIC_URL}/logos/travel.jpg`,
    description: 'Exploring different cultures and places helps me stay creative and inspired.'
  },
  { 
    title: 'Gaming', 
    image: `${process.env.PUBLIC_URL}/logos/gaming.jpg`,
    description: 'I unwind by playing strategy and open-world games.'
  },
];

function WhatILike() {
  return (
    <section id="what-i-like" className="what-i-like">
      <h2>What I Like to Do</h2>
      <div className="like-grid">
        {likes.map((like, index) => (
          <article className="like-card" key={index}>
            <h3>{like.title}</h3>
            <img src={like.image} alt={like.title} />
            <p>{like.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhatILike;

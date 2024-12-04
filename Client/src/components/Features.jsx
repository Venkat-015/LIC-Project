import React from 'react';
import '../styles/Features.css';

const features = [
  {
    title: 'Flexible Working Hours',
    description: 'Work on your schedule with no fixed timing.',
    image: '/images/flexible-hours.jpg',
  },
  {
    title: 'High Earning Opportunity',
    description: 'Earn attractive commissions.',
    image: '/images/earn-commissions.jpg',
  },
  {
    title: 'Independent Business',
    description: 'Be your own boss with LIC.',
    image: '/images/independent-business.jpg',
  },
  {
    title: 'Work from Home',
    description: 'Work conveniently from home.',
    image: '/images/work-from-home.jpg',
  },
];

function Features() {
  return (
    <div className="features">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <img src={feature.image} alt={feature.title} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;

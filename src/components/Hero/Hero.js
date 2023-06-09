import React from 'react';
import Container from '../Container/Container';
import restaurant from '../../img/restaurant.jpg';
import './Hero.styles.css';

const Hero = (props) => {
  const { children } = props;

  return (
    <section className="primary-bg-color-gray">
      <Container className="hero">
        <h1 className="primary-color-yellow hero-title">Little Lemon</h1>
        <h2 className="hero-subtitle highlight-color-gray">Chicago</h2>
        <p className="hero-text lead-text highlight-color-gray">We are a family owned</p>
        <div>
          {children}
        </div>
        <figure className="hero-image-container rounded">
          <img className="hero-image" src={restaurant} alt="Little Lemon Restaurant" />
        </figure>
      </Container>
    </section>
  );
}

export default Hero;

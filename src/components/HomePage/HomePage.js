import React from 'react';
import Hero from '../Hero/Hero';
import Specials from '../Specials/Specials';
import CustomersSay from '../CustomersSay/CustomersSay';
import Chicago from '../Chicago/Chicago';
import './HomePage.styles.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Specials className="home-page-cards" />
      <CustomersSay />
      <Chicago />
    </div>
  );
}

export default HomePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Hero from '../Hero/Hero';
import Specials from '../Specials/Specials';
import CustomersSay from '../CustomersSay/CustomersSay';
import Chicago from '../Chicago/Chicago';
import './HomePage.styles.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Hero>
        <Button handleClick={() => navigate('/booking')}>
          Reserve a Table
        </Button>
      </Hero>
      <Specials className="home-page-cards" />
      <CustomersSay />
      <Chicago />
    </div>
  );
}

export default HomePage;

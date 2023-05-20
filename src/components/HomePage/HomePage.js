import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Home | Little Lemon</title>
      </Helmet>
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

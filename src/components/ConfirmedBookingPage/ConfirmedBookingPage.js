import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import Button from '../Button/Button';
import './ConfirmedBookingPage.styles.css';

const ConfirmedBookingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmed-booking-page">
      <Helmet>
        <title>Confirmed Booking | Little Lemon</title>
      </Helmet>
      <Hero>
        <Button handleClick={() => navigate('/')}>
          Home
        </Button>
      </Hero>
      <Container>
        <h1>Confirmed Booking!</h1>
        <h2>Thank you!</h2>
      </Container>
    </div>
  );
}

export default ConfirmedBookingPage;

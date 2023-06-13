import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../BookingForm/BookingForm';
import Hero from '../Hero/Hero';
import Container from '../Container/Container';
import Button from '../Button/Button';
import './BookingPage.styles.css';

const BookingPage = () => {
  const navigate = useNavigate();
  const submitForm = () => navigate('/confirmed-booking');

  return (
    <div className="booking-page">
      <Helmet>
        <title>Booking | Little Lemon</title>
      </Helmet>
      <Hero>
        <Button handleClick={() => navigate('/')}>
          Home
        </Button>
      </Hero>

      <Container className="booking-container">
        <h1 className="highlight-color-black hero-title">Reserve a Table</h1>
      </Container>

      <BookingForm handleSubmit={submitForm} />
    </div>
  );
}

export default BookingPage;

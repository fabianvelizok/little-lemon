import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../BookingForm/BookingForm';
import Hero from '../Hero/Hero';
import Button from '../Button/Button';
import './BookingPage.styles.css';

const BookingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="booking-page">
      <Hero>
        <Button handleClick={() => navigate('/')}>
          Home
        </Button>
      </Hero>
      <BookingForm />
    </div>
  );
}

export default BookingPage;

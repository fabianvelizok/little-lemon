import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../../api/api';
import BookingForm from '../BookingForm/BookingForm';
import Hero from '../Hero/Hero';
import Button from '../Button/Button';
import './BookingPage.styles.css';

const BookingPage = () => {
  const navigate = useNavigate();

  const validateForm = (data) => {
    if (!data) return false;
    return Object.values(data).every(v => !!v)
  }

  const submitForm = (data) => {
    const formOK = validateForm(data);
    if (!formOK) {
      alert('Please fill in all fields');
      return;
    }
    const submittedOK = submitAPI(data);
    if (submittedOK) {
      navigate('/confirmed-booking');
    }
  }

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
      <BookingForm handleSubmit={submitForm} />
    </div>
  );
}

export default BookingPage;

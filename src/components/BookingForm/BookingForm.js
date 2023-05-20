import React, { useState, useContext } from 'react';
import Container from '../Container/Container';
import { AvailableTimesContext } from '../../contexts/AvailableTimesContext';

import './BookingForm.styles.css';

const emptyForm = {
  date: '',
  time: '',
  guests: '',
  occasion: ''
};

const BookingForm = ({ handleSubmit }) => {
  const { availableTimes, updateTimes } = useContext(AvailableTimesContext);
  const [form, setForm] = useState(emptyForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  }

  const handleChangeDate = (event) => {
    const { name, value } = event.target;
    updateTimes(value);
    setForm(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    handleSubmit(data);
    setForm(emptyForm);
  };

  // TODO: Style component
  return (
    <div className="booking-form">
      <Container>
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmitForm}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            name="date"
            value={form.date}
            onChange={handleChangeDate}
            required
          />

          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          >
            {availableTimes.map(time => <option key={time}>{time}</option>)}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="2"
            min="1"
            max="10"
            id="guests"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            required
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={form.occasion}
            onChange={handleChange}
            required
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <input type="submit" value="Make Your reservation" />
        </form>
      </Container>
    </div>
  );
}

export default BookingForm;

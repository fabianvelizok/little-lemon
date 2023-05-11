import React, { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm date field', () => {
  render(<BookingForm />);
  const dateField = screen.getByText("Choose date");
  expect(dateField).toBeInTheDocument();
})
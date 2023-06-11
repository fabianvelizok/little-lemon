/* eslint-disable testing-library/prefer-screen-queries */
import React, { fireEvent, render } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('the BookingForm component', () => {
  it('should render the date, time, guests and occasion fields', () => {
    const mockHandleSubmit = jest.fn();
    const view = render(<BookingForm handleSubmit={mockHandleSubmit} />);

    const dateField = view.getByText("Choose date");
    const timeField = view.getByText("Choose time");
    const guestsField = view.getByText("Number of guests");
    const occasionField = view.getByText("Occasion");

    expect(dateField).toBeInTheDocument();
    expect(timeField).toBeInTheDocument();
    expect(guestsField).toBeInTheDocument();
    expect(occasionField).toBeInTheDocument();
  });

  it('should render the submit button', () => {
    const mockHandleSubmit = jest.fn();
    const view = render(<BookingForm handleSubmit={mockHandleSubmit} />);
    const button = view.getByRole("button", { name: "Make Your reservation" });
    expect(button).toBeInTheDocument();
  });

  it('should send form if all fields were filled in', () => {
    const mockHandleSubmit = jest.fn();
    const view = render(<BookingForm handleSubmit={mockHandleSubmit} />);
    const button = view.getByRole("button", { name: "Make Your reservation" });
    const dateField = view.getByPlaceholderText("2023-01-01");
    const guestsField = view.getByRole("spinbutton", { name: "Number of guests" });

    fireEvent.change(dateField, { target: { value: '2023-02-02' } });
    fireEvent.change(guestsField, { target: { value: 2 } });
    fireEvent.click(button);

    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
  });

  it('should not send form if all fields were not filled in', () => {
    window.alert = jest.fn();
    const mockHandleSubmit = jest.fn();
    const view = render(<BookingForm handleSubmit={mockHandleSubmit} />);
    const button = view.getByRole("button", { name: "Make Your reservation" });
    fireEvent.click(button);
    expect(mockHandleSubmit).toHaveBeenCalledTimes(0);
    window.alert.mockClear();
  });
})
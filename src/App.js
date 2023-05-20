import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import BookingPage from './components/BookingPage/BookingPage';
import ConfirmedBookingPage from './components/ConfirmedBookingPage/ConfirmedBookingPage';

import './App.styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/confirmed-booking" element={<ConfirmedBookingPage />}></Route>
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;

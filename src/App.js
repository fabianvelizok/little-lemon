import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import HomePage from './components/HomePage/HomePage';
import BookingPage from './components/BookingPage/BookingPage';

import './App.styles.css';

function App() {
  return (
    <Container className="app">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </Main>
      <Footer />
    </Container>
  );
}

export default App;

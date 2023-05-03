import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import './App.styles.css';

function App() {
  return (
    <Container className="app">
      <Header />
      <Main>
        <h1>Content</h1>
      </Main>
      <Footer />
    </Container>
  );
}

export default App;

import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Container from '../Container/Container';
import './Header.styles.css';

const Header = () => {
  return (
    <Container>
      <header className="header">
        <Logo className="header-logo" />
        <Nav />
      </header>
    </Container>
  );
}

export default Header;

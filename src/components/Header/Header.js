import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import './Header.styles.css';

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;

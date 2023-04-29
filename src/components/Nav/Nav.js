import React from 'react';
import './Nav.styles.css';

const Nav = ({ layout = '' }) => {
  const stackClass = layout === 'stack' ? 'stack' : '';
  return (
    <nav className='nav'>
      <ul className={`${stackClass}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Reservations</a></li>
        <li><a href="/">Order Online</a></li>
        <li><a href="/">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;

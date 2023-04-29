import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import './Footer.styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <div>
        <h3>Navigation</h3>
        <Nav layout="stack"/>
      </div>
      <div>
        <h3>Contant</h3>
        <ul>
          <li><a href="/">Address</a></li>
          <li><a href="/">Phone number</a></li>
          <li><a href="/">Email</a></li>
        </ul>
      </div>
      <div>
        <h3>Social Media Links</h3>
        <ul>
          <li><a href="/">Address</a></li>
          <li><a href="/">Phone number</a></li>
          <li><a href="/">Email</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

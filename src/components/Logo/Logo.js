import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';

const Logo = ({ className }) => (
  <Link className={className} to="/">
    <img src={logo} alt="Logo" />
  </Link>
);

export default Logo;

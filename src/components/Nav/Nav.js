import React from 'react';
import { Link } from "react-router-dom";

import './Nav.styles.css';

// TODO: Commented sections will be developed in the future.
const Nav = ({ layout = '' }) => {
  const stackClass = layout === 'stack' ? 'stack' : '';
  return (
    <nav className="nav">
      <ul className={`${stackClass}`}>
        <li>
           <Link to="/">Home</Link>
        </li>
        {/* <li>
           <Link to="/">About</Link>
        </li> */}
        {/* <li>
           <Link to="/">Menu</Link>
        </li> */}
        <li>
           <Link to="/booking">Reservations</Link>
        </li>
        {/* <li>
           <Link to="/">Order Online</Link>
        </li> */}
        {/* <li>
           <Link to="/">Login</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Nav;

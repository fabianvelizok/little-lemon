import React from 'react';
import './Button.styles.css';

const Button = ({ children, handleClick }) => {
  return (
    <button
      className="button rounded primary-bg-color-yellow"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;

import React from 'react';
import './Button.styles.css';

const Button = ({ text, handleClick }) => {
  return (
    <button
      className="button rounded primary-bg-color-yellow"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;

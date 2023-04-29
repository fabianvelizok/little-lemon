import React from 'react';
import './Container.styles.css';

const Container = ({ children, className = '' }) => {
  const classes = `container ${className}`;
  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default Container;

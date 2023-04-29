import React from 'react';
import './Main.styles.css';

const Main = ({ children }) => {
  return (
    <main className="main">
      {children}
    </main>
  );
}

export default Main;

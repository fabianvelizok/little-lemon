import React from 'react';
import AvailableTimesContext from '../contexts/AvailableTimesContext';

const AvailableTimesProvider = ({ children, value }) => {
  return (
    <AvailableTimesContext.Provider value={value}>
      {children}
    </AvailableTimesContext.Provider>
  );
};

export default AvailableTimesProvider;
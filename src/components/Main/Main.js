import React from 'react';
import './Main.styles.css';
import AvailableTimesProvider from '../../providers/AvailableTimesProvider';
import useAvailableTimesReducer from '../../hooks/useAvailableTimes';
const Main = ({ children }) => {
  const { availableTimes, updateTimes } = useAvailableTimesReducer();

  return (
    <main className="main">
      <AvailableTimesProvider value={{ availableTimes, updateTimes }}>
        {children}
      </AvailableTimesProvider>
    </main>
  );
}

export default Main;

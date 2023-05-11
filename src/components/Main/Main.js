import React from 'react';
import './Main.styles.css';
import AvailableTimesProvider from '../../providers/AvailableTimesProvider';
import useAvailableTimesReducer from '../../hooks/useAvailableTimes';

const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const Main = ({ children }) => {
  const { availableTimes, updateTimes } = useAvailableTimesReducer(initializeTimes());

  return (
    <main className="main">
      <AvailableTimesProvider value={{ availableTimes, updateTimes }}>
        {children}
      </AvailableTimesProvider>
    </main>
  );
}

export default Main;

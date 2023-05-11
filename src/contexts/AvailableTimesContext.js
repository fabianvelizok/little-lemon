import { createContext } from 'react';

export const AvailableTimesContext = createContext({
  availableTimes: [],
  updateTimes: (newTimes) => { return newTimes; }
});

export default AvailableTimesContext;
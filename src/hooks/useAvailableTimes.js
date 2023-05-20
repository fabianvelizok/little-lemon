import { useReducer } from 'react';
import { initializeTimes, updateTimes } from '../utils/times';

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateTimes':
      return action.payload;
    default:
      return state;
  }
}

const useAvailableTimesReducer = () => {
  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

  return {
    availableTimes,
    updateTimes: (date) => {
      const payload = updateTimes(date);
      dispatch({ type: 'updateTimes', payload });
    }
  }
};

export default useAvailableTimesReducer;

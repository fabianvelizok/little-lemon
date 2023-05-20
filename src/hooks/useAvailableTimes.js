import { useReducer, useCallback } from 'react';
import { fetchAPI } from '../api/api';

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateTimes':
      return action.payload;
    default:
      return state;
  }
}

const useAvailableTimesReducer = () => {
  const initializeTimes = useCallback(() => fetchAPI(new Date()), []);
  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

  return {
    availableTimes,
    updateTimes: (date) => {
      const payload = fetchAPI(new Date(date));
      dispatch({ type: 'updateTimes', payload });
    }
  }
};

export default useAvailableTimesReducer;

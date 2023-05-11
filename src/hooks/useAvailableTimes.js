import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateTimes':
      return action.payload;
    default:
      return state;
  }
}

const useAvailableTimesReducer = (initialAvailableTimes) => {
  const [availableTimes, dispatch] = useReducer(reducer, initialAvailableTimes);

  return {
    availableTimes,
    updateTimes: (date) => {
      console.log(date);
      dispatch({ type: 'updateTimes', payload: initialAvailableTimes });
    }
  }
};

export default useAvailableTimesReducer;

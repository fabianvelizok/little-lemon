import { fetchAPI } from '../api/api';

export const initializeTimes = () => fetchAPI(new Date());

export const updateTimes = date => fetchAPI(new Date(date));

export default initializeTimes;
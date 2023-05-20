import { initializeTimes, updateTimes } from './times';
import { fetchAPI } from '../api/api';

jest.mock('../api/api', () => ({
  fetchAPI: jest.fn()
}));

describe('the times utilities', () => {
  beforeEach(() => {
    fetchAPI.mockReset();
  });

  it('should the initializeTimes function return an array of times', () => {
    fetchAPI.mockImplementation(() => ['10:00', '11:00']);
    const times = initializeTimes();
    expect(times.length).toBe(2);
    expect(fetchAPI).toHaveBeenCalledTimes(1);
  });

  it('should the updateTimes function return an array of times for a date', () => {
    fetchAPI.mockImplementation(() => ['10:00', '11:00', '12:00']);
    const times = updateTimes(new Date('2023-01-01'));
    expect(times.length).toBe(3);
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(new Date('2023-01-01'));
  });
});
import { submitAPI } from '../../api/api';

export const validateRequiredFields = (data) => {
  if (!data) return false;
  return Object.values(data).every(v => !!v)
}

export const validateBookingForm = (data) => {
  const metRequiredFields = validateRequiredFields(data);

  if (!metRequiredFields) {
    alert('Please fill in all fields.');
    return false;
  }
  return submitAPI(data);
}

export default validateBookingForm;
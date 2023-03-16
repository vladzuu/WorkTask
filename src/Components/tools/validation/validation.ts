import { EnumValidationTypes } from './types';

export const validation = {
  [EnumValidationTypes.Email]: (value: any) => {
    const condition = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (condition.test(value)) {
      return { isValid: true, error: '' };
    };
    return { isValid: false, error: 'Please enter a isValid email' }
  },
  [EnumValidationTypes.Password]: (value: any) => {
    const condition = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{1,}/g

    if (condition.test(value)) {
      return { isValid: true, error: '' };
    };
    return { isValid: false, error: 'The password must contain upper, lower Latin letters and numbers' }
  },
  [EnumValidationTypes.LatinCharacters]: (value: any) => {
    const condition = /^[a-zA-Z]+$/

    if (condition.test(value)) {
      return { isValid: true, error: '' };
    };
    return {
      isValid: false, error: 'Fill in the field using only latin letters'
    }
  },
  [EnumValidationTypes.Checkbox]: (value: any) => {
    if (value) {
      return { isValid: true, error: '' };
    };
    return {
      isValid: false, error: 'You must agree to the rules'
    }
  },
  [EnumValidationTypes.MinLength]: (value: any, expected: any) => {
    if (value.length >= expected) {
      return { isValid: true, error: '' };
    };
    return {
      isValid: false, error: `The number of characters is more than ${expected}`
    }
  },
  [EnumValidationTypes.MaxLength]: (value: any, expected: any) => {
    if (value.length <= expected) {
      return { isValid: true, error: '' };
    };
    return {
      isValid: false, error: `The number of characters is less than ${expected}`
    }
  },
  [EnumValidationTypes.ConfirmPassword]: (value: any, expected: any, state: any) => {
    if (value === state[expected]?.value && value.length) {
      return { isValid: true, error: '' };
    };
    return {
      isValid: false, error: `Passwords must match`
    }
  },
};
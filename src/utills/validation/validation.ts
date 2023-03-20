import { EnumValidationTypes } from './types';

export const validation = {
  [EnumValidationTypes.Email]: (value: any) => {
    const condition = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return (condition.test(value)) ?
      { isValid: true, error: '' }
      :
      { isValid: false, error: 'Please enter a isValid email' }
  },
  [EnumValidationTypes.Password]: (value: any) => {
    const condition = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{1,}/g

    return (condition.test(value)) ?
      { isValid: true, error: '' }
      :
      { isValid: false, error: 'The password must contain upper, lower Latin letters and numbers' }
  },
  [EnumValidationTypes.LatinCharacters]: (value: any) => {
    const condition = /^[a-zA-Z]+$/

    return (condition.test(value)) ?
      { isValid: true, error: '' }
      :
      { isValid: false, error: 'Fill in the field using only latin letters' }
  },
  [EnumValidationTypes.Checkbox]: (value: any) => {
    return (value)
      ?
      { isValid: true, error: '' }
      :
      { isValid: false, error: 'You must agree to the rules' }
  },
  [EnumValidationTypes.MinLength]: (value: any, expected: any) => {
    return (value.length >= expected) ?
      { isValid: true, error: '' }
      :
      { isValid: false, error: `The number of characters is more than ${expected}` }
  },
  [EnumValidationTypes.MaxLength]: (value: any, expected: any) => {
    return (value.length <= expected) ?
      { isValid: true, error: '' }
      :
      { isValid: false, error: `The number of characters is less than ${expected}` }
  },
  [EnumValidationTypes.ConfirmPassword]: (value: any, expected: any, state: any) => {
    return (value === state[expected] && value.length) ?
      { isValid: true, error: '' }
      :
      { isValid: false, error: `Passwords must match` }
  },
};
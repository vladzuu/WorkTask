import { ValidationsMethods, FormState } from './types';

interface Params {
  validations: ValidationsMethods[];
  value: any;
  state: FormState;
}

const callValidation = (params: Params) => {

  let errorM = '';
  const isValid = params.validations.every((value) => {
    const { error, isValid } = value.function(params.value, value.expected, params.state);
    errorM += error;
    return isValid;
  })

  return {
    isValid,
    error: errorM,
  }

}
export default callValidation;
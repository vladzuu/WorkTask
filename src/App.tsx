import React from 'react';

import './App.css';

import { fields } from './components/config/data';
import FormBuilder from './components/Form/FormBuilder';

import { FormState } from './components/Form/types';



const App: React.FC = (): JSX.Element => {
  const submitForm = (value: FormState) => {
    console.log(value);
  };

  return (
    <div className="App">
      <FormBuilder fields={fields} submitForm={submitForm} />
    </div>
  );
}

export default App;

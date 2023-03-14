import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormBuilder from './Components/Form/FormBuilder';
import { FormState, IFieldsProps } from './Components/Form/types';

const fields: IFieldsProps[] = [
  {
    label: 'FirstName',
    type: 'text',
    id: 'FirstName',
    name: 'FirstName',
    isRequired: true,
  },
  {
    label: 'LastName',
    type: 'text',
    id: 'LastName',
    name: 'LastName',
  },
  {
    label: 'E-mail',
    type: 'text',
    id: 'E-mail',
    name: 'E-mail',
    isRequired: true,
  },
  {
    label: 'Password',
    type: 'password',
    id: 'password',
    name: 'password',
    isRequired: true,
  },
  {
    label: 'Agree with rules',
    type: 'checkbox',
    id: 'checkbox',
    name: 'checkbox',
    isRequired: true,
  },
]

function App() {
  const submitForm = (value: FormState) => {
    console.log(value)
  }

  return (
    <div className="App">
      <FormBuilder fields={fields} submitForm={submitForm} />
    </div>
  );
}

export default App;

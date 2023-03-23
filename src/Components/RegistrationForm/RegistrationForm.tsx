import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../App';

import { fieldsRegistration } from '../../config/data';
import useRedirectAuth from '../../hooks/useRedirectAuth';

import Loader from '../common/Loader/Loader';
import FormBuilder from '../Form/FormBuilder';

import { FormState } from '../Form/types';

import './registrationForm.scss';

const RegistrationForm: React.FC = ({ }): JSX.Element => {
  const { isAuth, setUser, isLoading } = useContext(AuthContext);
  useRedirectAuth(isAuth);

  const submitForm = (value: FormState) => {
    setUser(value);
  };

  if (isLoading) {
    return <Loader />
  };

  return (
    <section className="registration">
      <h1>REGISTRATION</h1>
      <FormBuilder fields={fieldsRegistration} submitForm={submitForm} />
      <NavLink to="/">
        <button className="secondary">I have an account</button>
      </NavLink>
    </section>
  );
};

export default RegistrationForm;
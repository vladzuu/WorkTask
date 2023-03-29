import React from 'react';
import { NavLink } from 'react-router-dom';

import { fieldsRegistration } from '../../config/data';
import useAuth from '../../hooks/useAuth/useAuth';
import useRedirectAuth from '../../hooks/useRedirectAuth';

import Loader from '../common/Loader/Loader';
import FormBuilder from '../Form/FormBuilder';

import { FormState } from '../Form/types';

import './signUp.scss';

const SignUp: React.FC = ({ }): JSX.Element => {


  const { isAuth, setUser, isLoading } = useAuth();
  useRedirectAuth(isAuth);

  const submitForm = (value: FormState) => {
    setUser(value);
  };

  if (isLoading) {
    return <Loader />
  };

  return (
    <div className='background-block'>
      <section className="registration">
        <h1>REGISTRATION</h1>
        <FormBuilder fields={fieldsRegistration} submitForm={submitForm} />
        <NavLink to="/">
          <button className="secondary">I have an account</button>
        </NavLink>
      </section>
    </div>
  );
};

export default SignUp;
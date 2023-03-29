import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { fieldsSignIn } from '../../config/data';
import useRedirectAuth from '../../hooks/useRedirectAuth';

import FormBuilder from '../Form/FormBuilder';
import Loader from '../common/Loader/Loader';

import { FormState } from '../Form/types';

import './signIn.scss';
import useAuth from '../../hooks/useAuth/useAuth';

const SignIn: React.FC = (): JSX.Element => {

  const { isAuth, isErrorPassword, logIn, isLoading, clearError } = useAuth();
  useRedirectAuth(isAuth);

  useEffect(() => {
    return clearError();
  }, [])

  let submitForm = (value: FormState) => {
    logIn(value);
  };

  if (isLoading) {
    return <Loader />
  };

  return (
    <div className="background-block">
      <section className="sign-in">
        <h1>LOGIN FORM</h1>
        <FormBuilder fields={fieldsSignIn} submitForm={submitForm}>
          {isErrorPassword && <span className='error-label-password' >Password or Login incorrect</span>}
        </FormBuilder>
        <NavLink to="/registration">
          <button className="secondary">Create account</button>
        </NavLink>
      </section>
    </div>
  );
};

export default SignIn;

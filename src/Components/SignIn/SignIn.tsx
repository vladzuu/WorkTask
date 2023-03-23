import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { fieldsSignIn } from '../../config/data';
import { AuthContext } from '../../App';
import useRedirectAuth from '../../hooks/useRedirectAuth';

import FormBuilder from '../Form/FormBuilder';
import Loader from '../common/Loader/Loader';

import { FormState } from '../Form/types';

import './signIn.scss';

const SignIn: React.FC = (): JSX.Element => {
  const { isAuth, isErrorPassword, logIn, isLoading } = useContext(AuthContext);
  useRedirectAuth(isAuth);

  let submitForm = (value: FormState) => {
    logIn(value);
  };

  if (isLoading) {
    return <Loader />
  };

  return (
    <section className="sign-in">
      <h1>LOGIN FORM</h1>
      <FormBuilder fields={fieldsSignIn} submitForm={submitForm}>
        {isErrorPassword && <span style={{ alignSelf: "center", color: "red" }}>Password or Login incorrect</span>}
      </FormBuilder>
      <NavLink to="/registration">
        <button className="secondary">Create account</button>
      </NavLink>
    </section>
  );
};

export default SignIn;

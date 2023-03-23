import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../../components/Dashboard/Dashboard';
import PageNoFound from '../PageNoFound/PageNoFound';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import SignIn from '../../components/SignIn/SignIn';

const HomePage: React.FC = (): JSX.Element => {

  return (
    <div className="home-page">
      <Routes>
        <Route path='/registration' element={<RegistrationForm />} />
        <Route path='/' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<PageNoFound />} />
      </Routes>
    </div>
  );
};

export default HomePage;

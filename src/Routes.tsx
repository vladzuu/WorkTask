import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import PageNoFound from './pages/PageNoFound/PageNoFound';


const RoutesApp: React.FC = (): JSX.Element => {

  return (
    <>
      <Routes>
        <Route path='/registration' element={<SignUp />} />
        <Route path='/' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<PageNoFound />} />
      </Routes>
    </>
  );
};

export default RoutesApp;

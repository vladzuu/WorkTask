import React, { createContext } from 'react';

import './App.scss';

import { IUseAuth } from './hooks/useAuth/types';

import useAuth from './hooks/useAuth/useAuth';

import HomePage from './pages/HomePage/HomePage';

//@ts-ignore
export const AuthContext = createContext<IUseAuth>();

const App: React.FC = (): JSX.Element => {
  const hookValue = useAuth();
  return (
    <AuthContext.Provider value={hookValue}>
      <div className="App">
        <HomePage />
      </div >
    </AuthContext.Provider>
  );
}

export default App;

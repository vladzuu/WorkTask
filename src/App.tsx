import React, { useEffect } from 'react';

import './App.scss';

import useAuth from './hooks/useAuth/useAuth';

import RoutesApp from './Routes';

const App: React.FC = (): JSX.Element => {
  const { syncAuth } = useAuth();
  useEffect(() => syncAuth(), []);

  return (
    <>
      <RoutesApp />
    </>
  );
}

export default App;

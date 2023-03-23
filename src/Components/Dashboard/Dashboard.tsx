import React, { useContext } from 'react';

import './dashboard.scss';

import { AuthContext } from '../../App';
import useRedirectNotAuth from '../../hooks/useRedirectNotAuth';
import Loader from '../common/Loader/Loader';

const Dashboard: React.FC = (): JSX.Element => {
  const { isAuth, logOut, isLoading, userData } = useContext(AuthContext);
  useRedirectNotAuth(isAuth);

  const handleLogOut = () => {
    logOut();
  };

  if (isLoading) {
    return <Loader />
  };

  return (
    <div className="dashboard">
      <span>Hello {userData?.first_Name} {userData?.last_Name} </span>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
};

export default Dashboard;

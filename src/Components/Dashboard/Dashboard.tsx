import React, { useEffect } from 'react';

import useRedirectNotAuth from '../../hooks/useRedirectNotAuth';
import useAuth from '../../hooks/useAuth/useAuth';

import Cards from '../Cards/Cards';
import Loader from '../common/Loader/Loader';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import Header from '../Header/Header';
import ListItems from '../ListItems/ListItems';

import Button from '@mui/material/Button';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';

import useProduct from '../../hooks/useProduct/useProduct';
import useUserSetting from '../../hooks/useUserSetting/useUserSetting';

import './dashboard.scss';

const Dashboard: React.FC = (): JSX.Element => {
  const { isAuth, isLoading, logOut, userData } = useAuth();
  const { getProductsI, isError, products } = useProduct();
  const { setViewVariant, viewVariant } = useUserSetting();

  useRedirectNotAuth(isAuth);

  useEffect(() => {
    getProductsI();
  }, [])

  const handleView = () => {
    setViewVariant(viewVariant);
  };

  if (isLoading) {
    return <Loader />
  };

  return (
    <>
      <Header logout={logOut} lastName={userData.last_Name} firstName={userData.first_Name} />
      <div className="dashboard">
        <LeftNavBar />
        <div className="block-shopping">
          {isError
            ? 'Error'
            : viewVariant
              ? <Cards products={products} title={'dashboard'} />
              : <ListItems products={products} />
          }
          <Button onClick={handleView} variant={'contained'} color={'success'} className="button-view"
            startIcon={userData.viewProduct ? <ListAltIcon /> : <DashboardIcon />}
          >
            {viewVariant ? 'Table' : 'Cards'}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

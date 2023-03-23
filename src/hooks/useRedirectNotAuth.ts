import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirectNotAuth = (isAuth: boolean) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(isAuth ? '' : '/');
  }, [navigate, isAuth]);
};

export default useRedirectNotAuth;
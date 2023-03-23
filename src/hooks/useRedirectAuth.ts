import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirectAuth = (isAuth: boolean) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(isAuth ? '/dashboard' : '');
  }, [navigate, isAuth]);
};

export default useRedirectAuth;
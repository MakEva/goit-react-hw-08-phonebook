import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogin, selectToken } from '../../redux/auth/auth-selector';
import { Loader } from 'components/Loader/Loader';

const PublicRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (isLogin) {
    return <Navigate to="/phonebook" />;
  }

  return <Outlet />;
};

export default PublicRoute;

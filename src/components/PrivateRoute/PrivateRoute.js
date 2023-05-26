import { routes } from 'components/constant';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectorIsAuth } from 'redux/selector';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectorIsAuth);
  const location = useLocation();
  return isAuth ? children : <Navigate to={routes.LOGIN} state={location} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

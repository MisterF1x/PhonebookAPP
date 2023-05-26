import { routes } from 'components/constant';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectorIsAuth } from 'redux/selector';
import PropTypes from 'prop-types';

export const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectorIsAuth);
  const { state } = useLocation();
  return !isAuth ? children : <Navigate to={state ? state : routes.CONTACTS} />;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

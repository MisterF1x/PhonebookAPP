import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { routes } from 'components/constant';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUserError } from 'redux/authSlice';
import { selectorIsAuth, selectorUserError } from 'redux/selector';

const Login = () => {
  const error = useSelector(selectorUserError);
  const navigate = useNavigate();
  const isAuth = useSelector(selectorIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    isAuth && navigate(routes.HOME);
  }, [isAuth, navigate]);

  return (
    <>
      <LoginForm />
      {error && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={!!error}
          autoHideDuration={5000}
          onClose={() => {
            dispatch(resetUserError());
          }}
        >
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};
export default Login;

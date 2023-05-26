import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm.js/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { resetUserError } from 'redux/authSlice';
import { selectorUserError } from 'redux/selector';

const Register = () => {
  const error = useSelector(selectorUserError);
  const dispatch = useDispatch();
  return (
    <>
      <RegisterForm />
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
export default Register;

import { Button } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { routes } from 'components/constant';

export const AuthNav = () => {
  return (
    <>
      <Button
        component={RouterLink}
        to={routes.LOGIN}
        variant="outlined"
        sx={{
          mr: 1,
          color: 'inherit',
          borderColor: 'inherit',
          '&:hover': {
            borderColor: '#9dc8f4',
            color: '#9dc8f4',
          },
        }}
      >
        Login
      </Button>
      <Button
        component={RouterLink}
        to={routes.REGISTER}
        variant="outlined"
        sx={{
          color: 'inherit',
          borderColor: 'inherit',
          '&:hover': {
            borderColor: '#9dc8f4',
            color: '#9dc8f4',
          },
        }}
      >
        Signup
      </Button>
    </>
  );
};

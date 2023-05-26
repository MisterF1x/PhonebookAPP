import { Box, Container, Toolbar, AppBar, Link } from '@mui/material';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { routes } from 'components/constant';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';
import { useDispatch, useSelector } from 'react-redux';
import { selectorIsAuth } from 'redux/selector';
import { logOut } from 'redux/operation';
import { logOutUser } from 'redux/authSlice';
import { MobNav } from 'components/MobNav/MobNav';
import { Logo } from 'components/Logo/Logo';

export const ResponsiveAppBar = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectorIsAuth);
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(logOutUser());
    navigate(routes.HOME);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar component="nav" disableGutters>
          <MobNav onClick={handleLogOut} />
          <Box
            component={RouterLink}
            to={routes.HOME}
            display="flex"
            color="white"
            sx={{
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
              alignItems: 'center',
            }}
          >
            <Logo />
          </Box>

          <Box sx={{ flexGrow: 1, ml: 3, display: { xs: 'none', md: 'flex' } }}>
            <Link
              component={RouterLink}
              sx={{ my: 2, color: 'white', display: 'block' }}
              to={routes.CONTACTS}
            >
              Contacts
            </Link>
          </Box>
          <Box
            sx={
              isAuth
                ? { display: 'flex', ml: 'auto' }
                : {
                    display: { xs: 'none', md: 'flex' },
                    ml: 'auto',
                    flexGrow: 0,
                  }
            }
          >
            {isAuth ? <UserNav onClick={handleLogOut} /> : <AuthNav />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

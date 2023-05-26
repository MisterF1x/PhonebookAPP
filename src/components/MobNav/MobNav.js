import { Menu, MenuItem, Link, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { routes } from 'components/constant';
import { useSelector } from 'react-redux';
import { selectorIsAuth, selectorUser } from 'redux/selector';
import { Logo } from 'components/Logo/Logo';
import PropTypes from 'prop-types';

export const MobNav = ({ onClick }) => {
  const isAuth = useSelector(selectorIsAuth);
  const { user } = useSelector(selectorUser);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {isAuth && (
            <MenuItem
              divider={true}
              sx={{ color: 'blueviolet' }}
              onClick={handleCloseNavMenu}
            >
              {user?.name}
            </MenuItem>
          )}
          <MenuItem onClick={handleCloseNavMenu}>
            <Link component={RouterLink} to={routes.HOME} textAlign="center">
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <Link
              component={RouterLink}
              to={routes.CONTACTS}
              textAlign="center"
            >
              Contacts
            </Link>
          </MenuItem>
          {!isAuth && (
            <MenuItem onClick={handleCloseNavMenu}>
              <Link component={RouterLink} to={routes.LOGIN} textAlign="center">
                Login
              </Link>
            </MenuItem>
          )}
          {!isAuth ? (
            <MenuItem onClick={handleCloseNavMenu}>
              <Link
                component={RouterLink}
                to={routes.REGISTER}
                textAlign="center"
              >
                Signup
              </Link>
            </MenuItem>
          ) : (
            <MenuItem onClick={onClick}>
              <Link component="a" href="" textAlign="center">
                Logout
              </Link>
            </MenuItem>
          )}
        </Menu>
      </Box>
      <Box
        component={RouterLink}
        to={routes.HOME}
        sx={{
          flexGrow: 1,
          display: {
            xs: 'flex',
            md: 'none',
            color: 'inherit',
            textDecoration: 'none',
            alignItems: 'center',
          },
        }}
      >
        <Logo />
      </Box>
    </>
  );
};

MobNav.propTypes = {
  onClick: PropTypes.func.isRequired,
};

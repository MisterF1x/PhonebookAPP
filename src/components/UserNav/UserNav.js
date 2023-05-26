import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { stringToColor } from 'helpers/helpers';
import { useSelector } from 'react-redux';
import { selectorUser } from 'redux/selector';
import PropTypes from 'prop-types';

export const UserNav = ({ onClick }) => {
  const { user } = useSelector(selectorUser);

  return (
    <Stack direction={'row'}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mr: 2,
        }}
      >
        <Typography
          sx={{
            display: { xs: 'none', md: 'flex' },
            mr: 2,
          }}
        >
          {user.name}
        </Typography>
        <Avatar
          title={user.email}
          variant="rounded"
          sx={{ bgcolor: stringToColor(user.name) }}
        >
          <AccountCircleIcon />
        </Avatar>
      </Box>
      <Button
        onClick={onClick}
        sx={{
          display: { xs: 'none', md: 'flex' },
          color: 'inherit',
          borderColor: 'white',
          '&:hover': {
            borderColor: '#9dc8f4',
            color: '#9dc8f4',
          },
        }}
        title="Log Out"
        variant="outlined"
        startIcon={<LogoutIcon />}
      >
        Logout
      </Button>
    </Stack>
  );
};

UserNav.propTypes = {
  onClick: PropTypes.func.isRequired,
};

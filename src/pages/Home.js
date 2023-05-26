import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '3rem', md: '5rem' },
            textAlign: 'center',
          }}
        >
          Welcome to the Phonebook App
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
          }}
        >
          Create, manage, and search your contacts easily!
        </Typography>
      </Box>
    </>
  );
};
export default Home;

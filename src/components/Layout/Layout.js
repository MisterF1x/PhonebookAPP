import { ResponsiveAppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from '@mui/material';

export const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ mt: 5 }} component="main">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

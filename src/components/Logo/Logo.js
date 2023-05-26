import { Typography, Stack } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export const Logo = () => {
  return (
    <>
      <AutoStoriesIcon
        sx={{
          mr: 1,
          width: 50,
          height: 50,
        }}
      />
      <Stack>
        <Typography
          variant="h5"
          component="h2"
          noWrap
          sx={{
            fontFamily: 'monospace',
            fontWeight: 300,
            lineHeight: 1,
            color: 'inherit',
          }}
        >
          Phonebook
        </Typography>
        <Typography
          variant="caption"
          component="p"
          noWrap
          sx={{
            fontStyle: 'italic',
            borderTop: '1px dashed white',
            lineHeight: 1,
            pt: '3px',
            opacity: '.7',
          }}
        >
          your private contacts
        </Typography>
      </Stack>
    </>
  );
};

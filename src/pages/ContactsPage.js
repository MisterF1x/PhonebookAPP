import { ContactsFilter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts, selectorUserIsLoading } from 'redux/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import { Contacts } from 'components/Contacts/Contacts';
import { Alert, AlertTitle, Box, Snackbar, Typography } from '@mui/material';
import { resetError } from 'redux/contactsSlice';
import { RiContactsBookFill } from 'react-icons/ri';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { items, error } = useSelector(selectorContacts);
  const isLoading = useSelector(selectorUserIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box
      sx={{
        maxWidth: '50ch',
        mx: 'auto',
        px: 2,
      }}
    >
      <Typography variant="h3" component="h1">
        Contacts
      </Typography>
      <ContactForm />
      {!!items.length || isLoading ? (
        <>
          <ContactsFilter />
          <Contacts />
        </>
      ) : (
        <Box
          sx={{
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <RiContactsBookFill size={70} />
          <Typography align="center" variant="h5" component="h2" sx={{ mt: 3 }}>
            No Contacts have been created yet.
          </Typography>
        </Box>
      )}

      {error && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={!!error}
          autoHideDuration={4000}
          onClose={() => {
            dispatch(resetError());
          }}
        >
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Oops, something went wrong! <strong>Try again later!</strong>
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};
export default ContactsPage;

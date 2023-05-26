import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts } from 'redux/selector';
import { addContact } from 'redux/operation';
import { NumericFormatCustom } from 'components/NumberField/NumberField';
import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';

const validationSchema = yup.object().shape({
  name: yup
    .string('Enter your name')
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .min(9, 'Phone number must be at least 9 digits')
    .required('Phone number is required')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});
export const ContactForm = () => {
  const { items } = useSelector(selectorContacts);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema,
    onSubmit: ({ name, number }, { resetForm, setSubmitting }) => {
      const contact = {
        name,
        number,
      };
      const hasName = items.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
      if (hasName) return window.alert(`${name} is allready in contacts`);
      dispatch(addContact(contact));
      setSubmitting(false);
      resetForm();
    },
  });

  return (
    <Box
      component="form"
      sx={{ mx: 'auto', mb: 5, mt: 2, maxWidth: '50ch' }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        sx={{ mb: 2 }}
        fullWidth
        name="name"
        label="Name"
        type="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        sx={{ mb: 2 }}
        fullWidth
        name="number"
        label="Phone"
        type="tel"
        value={formik.values.number}
        onChange={formik.handleChange}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
        InputProps={{
          inputComponent: NumericFormatCustom,
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button
        disabled={formik.isSubmitting}
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
      >
        {formik.isSubmitting ? (
          <CircularProgress size={25} color="inherit" />
        ) : (
          'Add contact'
        )}
      </Button>
    </Box>
  );
};

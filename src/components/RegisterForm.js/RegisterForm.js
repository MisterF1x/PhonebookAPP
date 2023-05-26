import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import { signUp } from 'redux/operation';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const validationSchema = yup.object().shape({
  name: yup
    .string('Enter your name')
    .required('Name is required')
    .min(5, 'Name should be of minimum 5 characters length'),
  email: yup
    .string('Enter your email')
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .min(7, 'Password should be of minimum 8 characters length')
    .required('Password number is required'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
    },
    validationSchema,
    onSubmit: ({ name, email, password }, action) => {
      dispatch(signUp({ name, email, password }));
      action.setSubmitting(false);
      action.resetForm();
    },
  });

  return (
    <Box
      component="form"
      sx={{ mx: 'auto', p: { xs: 2 }, maxWidth: '50ch' }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        required
        sx={{ mb: 2 }}
        fullWidth
        name="name"
        label="Username"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        sx={{ mb: 2 }}
        required
        fullWidth
        name="email"
        label="Email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        required
        sx={{ mb: 2 }}
        fullWidth
        name="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                title={showPassword ? 'show password' : 'hide password'}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        required
        sx={{ mb: 2 }}
        fullWidth
        name="confirm"
        label="Confirm password"
        type={showPassword ? 'text' : 'password'}
        value={formik.values.confirm}
        onChange={formik.handleChange}
        error={formik.touched.confirm && Boolean(formik.errors.confirm)}
        helperText={formik.touched.confirm && formik.errors.confirm}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                title={showPassword ? 'show password' : 'hide password'}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
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
          'Signup'
        )}
      </Button>
    </Box>
  );
};

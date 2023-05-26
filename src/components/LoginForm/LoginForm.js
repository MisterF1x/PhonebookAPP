import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { login } from 'redux/operation';
import { useDispatch } from 'react-redux';

const validationSchema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values, action) => {
      dispatch(login(values));
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
        sx={{ mb: 2 }}
        fullWidth
        id="email"
        name="email"
        label="Email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        sx={{ mb: 2 }}
        fullWidth
        id="password"
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
      <Button color="primary" variant="contained" fullWidth type="submit">
        {formik.isSubmitting ? (
          <CircularProgress size={25} color="inherit" />
        ) : (
          'Log In'
        )}
      </Button>
    </Box>
  );
};

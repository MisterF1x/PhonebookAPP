import { useDispatch, useSelector } from 'react-redux';
import { setValue } from 'redux/filterSlice';
import { selectorFilter } from 'redux/selector';
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';

export const ContactsFilter = () => {
  const [showIcon, setShowIcon] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector(selectorFilter);
  return (
    <FormControl variant="filled">
      <InputLabel htmlFor="filled-adornment-password">
        Find contacts by name
      </InputLabel>
      <FilledInput
        sx={{ maxWidth: '30ch' }}
        size="small"
        value={filter}
        onFocus={() => setShowIcon(true)}
        onChange={e => dispatch(setValue(e.currentTarget.value.trim()))}
        endAdornment={
          <InputAdornment position="end">
            {showIcon && (
              <IconButton
                type="reset"
                aria-label="reset button"
                onClick={() => {
                  dispatch(setValue(''));
                  setShowIcon(false);
                }}
                edge="end"
              >
                <ClearIcon />
              </IconButton>
            )}
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

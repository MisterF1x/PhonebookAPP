import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { PatternFormat } from 'react-number-format';

export const NumericFormatCustom = forwardRef(function NumericFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <PatternFormat
      {...other}
      getInputRef={ref}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.formattedValue,
          },
        });
      }}
      format="+380 (##) ### ####"
      mask="_"
    />
  );
});
NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';
const Input = (props) => {
  const {
    control,
    name,
    type = 'text',
    error = '',
    children,
    placeholder,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        autoComplete="off"
        className={classNames(
          'w-full py-4 px-6 border rounded-xl text-sm font-medium bg-transparent',
          error.length > 0
            ? 'border-error text-error'
            : 'border-primary text-text1',
          children ? 'pr-16' : '',
        )}
        placeholder={error.length <= 0 ? placeholder : ''}
        {...field}
        {...rest}
      />
      {error.length > 0 && (
        <span className="text-sm font-medium text-error pointer-events-none error-input">
          {error}
        </span>
      )}
      {children && (
        <span
          className={`absolute right-6 ${
            error.length > 0 ? 'top-[35%]' : 'top-2/4'
          } -translate-y-2/4 cursor-pointer select-none`}
        >
          {children}
        </span>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default Input;

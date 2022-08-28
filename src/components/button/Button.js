import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';
import { Link } from 'react-router-dom';
const Button = ({
  type = 'button',
  className = '',
  children,
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  let defaultBtnClassName =
    'p-4 text-base font-semibold rounded-xl flex justify-center items-center min-h-[56px] ';
  switch (rest.kind) {
    case 'primary':
      defaultBtnClassName = defaultBtnClassName + 'bg-primary text-white';
      break;
    case 'secondary':
      defaultBtnClassName = defaultBtnClassName + 'bg-secondary text-white';
      break;
    case 'ghost':
      defaultBtnClassName =
        defaultBtnClassName + 'bg-secondary text-secondary bg-opacity-10';
      break;
    default:
      break;
  }
  if (rest.href)
    return (
      <Link
        to={rest.href}
        className={classNames(defaultBtnClassName, className)}
      >
        {child}
      </Link>
    );
  return (
    <button
      className={classNames(
        defaultBtnClassName,
        !!isLoading ? 'opacity-50 pointer-events-none' : '',
        className,
      )}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  kind: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
};
export default Button;

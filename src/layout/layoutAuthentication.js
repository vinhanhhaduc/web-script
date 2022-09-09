import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LayoutAuthentication = (props) => {
  const { children, heading = '' } = props;
  return (
    <div className="relative w-full min-h-screen p-10 bg-secondary bg-opacity-80 isolate">
      <img
        src="/ellipse.png"
        alt="bg"
        className="hidden lg:block absolute bottom-0 left-0 right-0 pointer-events-none z-[-1] w-full h-[70vh]"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16 flex justify-center">
        <img
          src="/logo.png"
          alt="logo"
          className="rounded-xl lg:w-[120px] lg:h-[120px] w-[70px] h-[70px]"
        />
      </Link>
      <div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-2xl lg:mb-5 text-text1">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};
LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default LayoutAuthentication;

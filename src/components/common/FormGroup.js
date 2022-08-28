import React from 'react';

const FormGroup = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-2 lg:gap-y-5 mb-4 lg:mb-6">
      {children}
    </div>
  );
};

export default FormGroup;

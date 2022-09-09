import React, { useState } from 'react';

const DashboardSearch = () => {
  return (
    <div className="relative z-50">
      <div className="bg-primary rounded-2xl shadow-md lg:p-2 p-3 lg:w-full w-[150%] flex items-center">
        <div className="flex-1 lg:px-5 px-2">
          <input
            type="text"
            placeholder="Admin search"
            className="bg-transparent text-sm placeholder:text-white text-white w-full"
          />
        </div>
        <button className="lg:w-[72px] w-[20px] lg:rounded-full text-white lg:h-10 h-5 flex items-center justify-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DashboardSearch;

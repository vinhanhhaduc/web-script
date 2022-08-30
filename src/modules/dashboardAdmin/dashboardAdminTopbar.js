import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardSearch from './dashboardSearch';
import { Outlet } from 'react-router-dom';
const DashboardAdminTopbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between mt-8 ml-7">
        <div className="flex items-center gap-x-5 flex-1">
          <button
            className={`text-primary select-none ${
              show
                ? 'border border-primary lg:w-[30px] lg:h-[30px] w-[24px] h-[24px] rounded-full flex justify-center items-center transition-all'
                : ''
            }`}
            onClick={() => setShow(!show)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="lg:max-w-[458px] w-full">
            <DashboardSearch></DashboardSearch>
          </div>
        </div>
        <div className="flex items-center gap-x-10 flex-1 justify-end">
          <Link to="/" className="inline-block">
            <img
              src="/logo.png"
              alt="logo"
              className="lg:w-[60px] lg:h-[60px] w-[70px] h-[60px] lg:rounded-full rounded-xl object-cover lg:mr-10 mr-5"
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-start">
        {show ? (
          <div className="bg-primary ml-8 mt-3">asdasdsa</div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default DashboardAdminTopbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardSearch from './dashboardSearch';
import { Button } from '@mui/material';
import DashboardSidebarAdmin from './DashboardSidebarAdmin';
const DashboardAdminTopbar = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between ml-7">
        <div className="flex items-center gap-x-5 flex-1">
          <Button
            style={{
              borderRadius: '100%',
              minWidth: '40px',
              minHeight: '40px',
              color: '#A273FF',
            }}
            onClick={() => setShow(!show)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#A273FF"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
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
      <div className="flex justify-start absolute">
        <DashboardSidebarAdmin show={show}></DashboardSidebarAdmin>
      </div>
    </>
  );
};

export default DashboardAdminTopbar;

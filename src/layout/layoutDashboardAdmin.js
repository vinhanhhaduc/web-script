import React from 'react';
import DashboardAdminTopbar from '../modules/dashboardAdmin/dashboardAdminTopbar';
import { Outlet } from 'react-router';
const LayoutDashboardAdmin = () => {
  return (
    <div className="bg-secondary bg-opacity-60 pt-8 min-h-screen">
      <DashboardAdminTopbar></DashboardAdminTopbar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutDashboardAdmin;

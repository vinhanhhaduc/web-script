import React from 'react';
import { NavLink } from 'react-router-dom';
import IconAddPost from '../../components/icons/IconAddPost';
import IconManagePost from '../../components/icons/IconManagePost';
import IconAddCategory from '../../components/icons/IconAddCategory';
import IconManageCategory from '../../components/icons/IconManageCategory';
import IconLogOut from '../../components/icons/IconLogOut';
import { AnimatePresence, motion } from 'framer-motion';
import IconSettings from '../../components/icons/IconSettings';
import { RiAdminLine } from 'react-icons/ri';
export const sidebarAdmin = [
  {
    id: 1,
    icon: <RiAdminLine className="w-6 h-6"></RiAdminLine>,
    name: 'Admin',
    url: '/admin',
  },
  {
    id: 2,
    icon: <IconAddPost></IconAddPost>,
    name: 'Add post',
    url: '/admin/add-post',
  },
  {
    id: 3,
    icon: <IconManagePost></IconManagePost>,
    name: 'Manage post',
    url: '/admin/manage-post',
  },
  {
    id: 4,
    icon: <IconAddCategory></IconAddCategory>,
    name: 'Add category',
    url: '/admin/add-category',
  },
  {
    id: 5,
    icon: <IconManageCategory></IconManageCategory>,
    name: 'Manage category',
    url: '/admin/manage-category',
  },
  { id: 6, icon: <IconSettings></IconSettings>, name: 'Setting' },
  { id: 7, icon: <IconLogOut></IconLogOut>, name: 'Log out' },
];
export const sidebarClassName =
  ' px-[18px] flex items-center w-full font-medium text-sm py-auto h-[60px]';
const DashboardSidebarAdmin = ({ show = false }) => {
  return (
    <>
      <div className="bg-primary ml-5 lg:rounded lg:mt-5">
        <AnimatePresence>
          <motion.div animate={{ width: show ? '194px' : '60px' }}>
            {sidebarAdmin.map((items) => (
              <NavLink
                to={`${items.url}`}
                className={({ isActive }) =>
                  isActive
                    ? `${sidebarClassName} bg-white rounded text-primary ${
                        show ? 'w-[194px]' : 'w-[60px]'
                      }`
                    : `${sidebarClassName} sidebar transition-all text-white ${
                        show ? 'w-[194px]' : 'w-[60px]'
                      }`
                }
              >
                <span>{items.icon}</span>
                {show ? (
                  <span className="whitespace-nowrap ml-2">{items.name}</span>
                ) : (
                  ''
                )}
              </NavLink>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default DashboardSidebarAdmin;

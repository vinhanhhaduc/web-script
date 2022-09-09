import IconAddPost from '../components/icons/IconAddPost';
import IconManagePost from '../components/icons/IconManagePost';
import IconAddCategory from '../components/icons/IconAddCategory';
import IconManageCategory from '../components/icons/IconManageCategory';
import IconLogOut from '../components/icons/IconLogOut';

export const theme = {
  primary: '#A273FF',
  third: '#5D3FD3',
  secondary: '#301934',
  text1: '#171725',
  error: '#EB5757',
};
export const sidebar = [
  { id: 1, icon: <IconAddPost></IconAddPost>, name: 'Add post' },
  { id: 2, icon: <IconManagePost></IconManagePost>, name: 'Manage post' },
  { id: 3, icon: <IconAddCategory></IconAddCategory>, name: 'Add category' },
  {
    id: 4,
    icon: <IconManageCategory></IconManageCategory>,
    name: 'Manage category',
  },
  { id: 5, icon: <IconLogOut></IconLogOut>, name: 'Log out' },
];

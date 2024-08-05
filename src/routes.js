import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdLock,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import DataTables from 'views/admin/dataTables';


const routes = [
  {
    name: '포트폴리오',
    layout: '/admin',
    path: '/portfolio',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: '투자일기',
    layout: '/admin',
    path: '/diary',
    icon: (
      <Icon
        as={MdLock}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: '피드',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/feed',
    component: <DataTables />,
  },
  
];

export default routes;

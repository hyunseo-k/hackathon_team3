import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
} from 'react-icons/md';
import { PiNotepadFill } from "react-icons/pi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

// Admin Imports
import MainDashboard from 'views/admin/default';
import Diary from 'views/admin/diary';
import Feed from 'views/admin/dataTables';


const routes = [
  {
    name: '포트폴리오',
    layout: '/admin',
    path: '/portfolio',
    icon: <Icon as={RiMoneyDollarCircleFill} width="20px" height="20px" color="inherit" marginTop={1}/>,
    component: <MainDashboard />,
  },
  {
    name: '투자일기',
    layout: '/admin',
    path: '/diary',
    icon: (
      <Icon
        as={PiNotepadFill}
        width="20px"
        height="30px"
        color="inherit"
        marginTop={1}
      />
    ),
    component: <Diary />,
    secondary: true,
  },

  {
    name: '피드',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit"  marginTop={1}/>,
    path: '/feed',
    component: <Feed />,
  },
  
];

export default routes;

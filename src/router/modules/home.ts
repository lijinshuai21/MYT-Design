import { lazy } from 'react';
import { HomeIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const Home: IRouter[] = [
  {
    path: '/home',
    Component: lazy(() => import('pages/Home')),
    meta: {
      title: '首页',
      Icon: HomeIcon,
    },
  },
];

export default Home;

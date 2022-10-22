import { lazy } from 'react';
import { StarIcon,UserAddIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const store: IRouter[] = [
  {
    path: '/store',
    Component: lazy(() => import('pages/Store')),
    meta: {
      title: '店铺信息',
      Icon: UserAddIcon,
    },
  },
];

export default store;

import { lazy } from 'react';
import { UserIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const customerService: IRouter[] = [
  {
    path: '/customerService',
    Component: lazy(() => import('pages/CustomerService')),
    meta: {
      title: '客服',
      Icon: UserIcon,
    },
  },
];

export default customerService;

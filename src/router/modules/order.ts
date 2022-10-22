import { lazy } from 'react';
import { QueueIcon,OrderAscendingIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const order: IRouter[] = [
  {
    path: '/order',
    meta: {
      title: '订单',
      Icon: QueueIcon,
    },
    children: [
      {
        path: 'orderlist',
        Component: lazy(() => import('pages/Order/orderlist')),
        meta: {
          title: '订单列表',
          Icon: OrderAscendingIcon,
        },
      },
      {
        path: 'orderdelete',
        Component: lazy(() => import('pages/Order/orderdelete')),
        meta: { title: '退货申请处理',Icon: OrderAscendingIcon, },
      },
    ],
  },
];

export default order;

import { lazy } from 'react';
import { QueueIcon,MailIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const marketing: IRouter[] = [
  {
    path: '/marketing',
    meta: {
      title: '营销',
      Icon: QueueIcon,
    },
    children: [
      {
        path: 'coupon',
        Component: lazy(() => import('pages/Marketing/coupon')),
        meta: {
          title: '优惠卷列表',
          Icon: MailIcon,
        },
      },
      {
        path: 'seckill',
        Component: lazy(() => import('pages/Marketing/seckill')),
        meta: { title: '秒杀活动列表' },
      },
    ],
  },
];

export default marketing;

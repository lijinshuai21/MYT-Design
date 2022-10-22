import { lazy } from 'react';
import { ShopIcon,AddIcon,ViewListIcon,BarcodeIcon} from 'tdesign-icons-react';
import { IRouter } from '../index';

const shop: IRouter[] = [
  {
    path: '/shop',
    meta: {
      title: '商品',
      Icon: ShopIcon,
    },
    children: [
      {
        path: 'addshop',
        Component: lazy(() => import('pages/Shop/addshop')),
        meta: {
          title: '添加商品',
          Icon: AddIcon,
        },
      },
      {
        path: 'shoplist',
        Component: lazy(() => import('pages/Shop/shoplist')),
        meta: { title: '商品列表',Icon: ViewListIcon, },
      },{
        path: 'shopclass',
        Component: lazy(() => import('pages/Shop/shopclass')),
        meta: { title: '商品分类',Icon: ViewListIcon, },
      },{
        path: 'shopBrand',
        Component: lazy(() => import('pages/Shop/shopbrand')),
        meta: { title: '品牌管理',Icon: BarcodeIcon, },
      },
    ],
  },
];

export default shop;

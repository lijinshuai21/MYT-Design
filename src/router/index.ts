import React, { lazy } from 'react';
import { BrowserRouterProps } from 'react-router-dom';

import Home from './modules/home';
import shop from './modules/shop';
import marketing from './modules/marketing';
import order from './modules/order';
import customerService from './modules/customerService';
import store from './modules/store';

import user from './modules/user';
import login from './modules/login';
import otherRoutes from './modules/others';

export interface IRouter {
  path: string;
  redirect?: string;
  Component?: React.FC<BrowserRouterProps> | (() => any);
  /**
   * 当前路由是否全屏显示
   */
  isFullPage?: boolean;
  /**
   * meta未赋值 路由不显示到菜单中
   */
  meta?: {
    title?: string;
    Icon?: React.FC;
    /**
     * 侧边栏隐藏该路由
     */
    hidden?: boolean;
    /**
     * 单层路由
     */
    single?: boolean;
  };
  children?: IRouter[];
}

const routes: IRouter[] = [
  {
    path: '/login',
    Component: lazy(() => import('pages/Login')),
    isFullPage: true,
    meta: {
      hidden: true,
    },
  },
  {
    path: '/',
    redirect: '/Login',
  },
];

const allRoutes = [...routes, ...Home, ...shop, ...marketing, ...order, ...customerService, ... store, ...user, ...otherRoutes];

export default allRoutes;

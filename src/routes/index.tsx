import React from 'react';
import type { RouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Dashboard'));
const Login = React.lazy(() => import('../pages/Login'));

export enum ROUTE {
  LOGIN = '/login',
  DASHBOARD = '/dashboard',
}

export interface IRouteProps extends RouteProps {
  key?: string;
  routes?: IRouteProps[];
}

const routes: IRouteProps[] = [
  {
    path: ROUTE.LOGIN,
    key: ROUTE.LOGIN,
    component: Login,
  },
  {
    path: ROUTE.DASHBOARD,
    key: ROUTE.DASHBOARD,
    component: Home,
  },
];

export default routes;

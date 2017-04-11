import asyncRoutes from 'components/core/AsyncComponent';

export const Home = asyncRoutes(() => System.import('./Home'));
export const Login = asyncRoutes(() => System.import('./Login'));

import asyncRoutes from 'components/hoc/AsyncComponent';

export const Home = asyncRoutes(() => System.import('./Home'));

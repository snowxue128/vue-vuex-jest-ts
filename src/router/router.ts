import Dashboard from '@/views/Dashboard.vue';
import Heroes from '@/views/Heroes.vue';
import Detail from '@/views/Detail.vue';

import routerType from './types';

const { detail, heroes, dashboard } = routerType;

export default [
    {
      path: '/dashboard',
      name: dashboard,
      component: Dashboard,
    },
    {
      path: '/heroes',
      name: heroes,
      component: Heroes,
    },
    {
      path: '/detail/:id',
      name: detail,
      component: Detail,
    },
    {
      path: '/',
      redirect: "/dashboard",
    },
    {
      path: '*',
      redirect: "/dashboard",
    },
];

export default [
  {
    path: '/',
    component: require('./components/MainView'),
    name: 'home',
    children: [
      {
        path: 'table',
        component: require('./components/MainView/Table'),
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

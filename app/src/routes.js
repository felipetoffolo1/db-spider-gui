export default [
  {
    path: '/',
    component: require('./components/HomeView'),
    name: 'home',
  },
  {
    path: '*',
    redirect: '/',
  },
];

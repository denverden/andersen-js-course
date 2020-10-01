import homePage from '../../components/home-page/HomePage';
import error404 from '../../components/error404/Error404';

const routes = [
  { path: '', components: [homePage] },
  { path: '***', components: [error404] },
];

export default routes;

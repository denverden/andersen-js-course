import header from '../../components/header/Header';
import editPage from '../../components/edit-page/EditPage';
import homePage from '../../components/home-page/HomePage';
import error404 from '../../components/error404/Error404';

const routes = [
  { path: '', components: [header, homePage] },
  { path: 'edit', components: [header, editPage] },
  { path: '***', components: [header, error404] },
];

export default routes;

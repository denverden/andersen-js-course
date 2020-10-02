import Component from '../../core/Component';
import './error404.scss';
import img404 from './404_bg.png';

class Error404 extends Component {}

const error404 = new Error404({
  selector: 'main',
  template: `
  <div class="wrap">
    <h1 class="error-page text-center">Oops, something went wrong.</h1>
    <img class="img-fluid" src="${img404}" alt="error404">
    <a class="error-page-btn" href="/">TO LEARN</a>
  </div>`,
});

export default error404;

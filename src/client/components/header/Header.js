import Component from '../../core/Component';
import './header.scss';

class Header extends Component {}

const header = new Header({
  selector: 'header',
  template: '<h1 class="header__text"><a href="/">ENGLISH FOR KIDS</a></h1>',
});

export default header;

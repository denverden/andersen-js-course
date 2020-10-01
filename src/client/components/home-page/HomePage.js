import Component from '../../core/Component';

class HomePage extends Component {}

const homePage = new HomePage({
  selector: 'main',
  template: '<h1>Главная страница.</h1>',
});

export default homePage;

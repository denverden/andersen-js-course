import Component from '../../core/Component';
import View from './View';
import Controller from './Controller';
import Model from './Model';

import './homepage.scss';

class HomePage extends Component {
  // eslint-disable-next-line class-methods-use-this
  afterInit() {
    const model = new Model();
    const view = new View();
    // eslint-disable-next-line no-unused-vars
    const controller = new Controller(model, view);
  }
}

const homePage = new HomePage({
  selector: 'main',
  template: '<div class="panel"></div>',
});

export default homePage;

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
  template: `
    <h2>Watch Listen Memorize</h2>
    <a class="btn btn--menu" href="#edit">Edit &rarr;</a>
    <div class="panel">Loading...</div>`,
});

export default homePage;

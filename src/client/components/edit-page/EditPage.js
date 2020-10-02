import Component from '../../core/Component';
import View from './View';
import Controller from './Controller';
import Model from './Model';

import './editpage.scss';

class EditPage extends Component {
  // eslint-disable-next-line class-methods-use-this
  afterInit() {
    const model = new Model();
    const view = new View();
    // eslint-disable-next-line no-unused-vars
    const controller = new Controller(model, view);
  }
}

const editPage = new EditPage({
  selector: 'main',
  template: `
    <div class="panel">
      <table class="table">
        <thead class="table__thead">
          <tr>
            <th>Word</th>
            <th>Translate</th>
            <th>Resources</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody class="table__body"><tr><td colspan="5">Loading...</tr></tbody>
      </table>
    </div>`,
});

export default editPage;

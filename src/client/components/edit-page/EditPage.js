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
    <h2>Edit Cards</h2>
    <a class="btn btn--menu" href="#">Learn &rarr;</a>
    <div class="panel">
      <table class="table">
        <thead class="table__thead">
          <tr>
            <th>Word</th>
            <th>Translate</th>
            <th>Resources</th>
            <th colspan="2"><a class="btn table__btn btn--add" href="#">+ Add Card</a></th>
          </tr>
        </thead>
        <tbody class="table__body"><tr><td colspan="5">Loading...</tr></tbody>
      </table>
    </div>
    <section class="modal">
      <h2 class="modal__header">Add/Update Card</h2>
      <div class="modal__body">
        <form class="modal__form">
          <input type="hidden" name="id" value="">
          <label for="word">Word</label>
          <input type="text" name="word" value="">
          <label for="translation">Translation</label>
          <input type="text" name="translation" value="">
          <label for="in_image">Image</label>
          <img class="modal__image" src="">
          <input type="file" name="in_image" accept="image/jpeg">
          <label for="in_audio">Audio</label>
          <audio class="modal__audio" src="" controls></audio>
          <input type="file" name="in_audio" accept="audio/mpeg">
        </form>
        <div class="modal__txt">Файлы не более 50кб, в базе похоже ограничения. Возвращает 413 ошибку.</div>
      </div>
      <div class="modal__button">Send</div>
    </section>
    `,
});

export default editPage;

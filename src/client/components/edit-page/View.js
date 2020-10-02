import EventEmitter from '../../tools/EventEmitter';
import { createRow } from '../../tools/helpers';

class View extends EventEmitter {
  // eslint-disable-next-line class-methods-use-this
  showCards(data) {
    data.then(response => {
      document.querySelector('.table__body').innerHTML = '';
      response.cards.forEach(card => document.querySelector('.table__body').appendChild(createRow(card)));
    });
  }
}

export default View;

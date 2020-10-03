import EventEmitter from '../../tools/EventEmitter';
import { createRow } from '../../tools/helpers';

class View extends EventEmitter {
  constructor() {
    super();

    this.panel = document.querySelector('.panel');
    this.panel.addEventListener('click', this.panelClick.bind(this));
  }

  // eslint-disable-next-line class-methods-use-this
  panelClick(event) {
    event.preventDefault();
    if (event.target.classList.contains('btn--delete')) {
      this.emit('delete', event.target.dataset.id);
    } else if (event.target.classList.contains('btn--edit')) {
      this.emit('edit', event.target.dataset.id);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  showCards(data) {
    data.then(response => {
      document.querySelector('.table__body').innerHTML = '';
      response.cards.forEach(card => document.querySelector('.table__body').appendChild(createRow(card)));
    });
  }

  // eslint-disable-next-line class-methods-use-this
  deleteCard(card) {
    document.getElementById(card).parentNode.removeChild(document.getElementById(card));
  }
}

export default View;

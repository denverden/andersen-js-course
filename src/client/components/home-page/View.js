import EventEmitter from '../../tools/EventEmitter';
import { createCard } from '../../tools/helpers';

class View extends EventEmitter {
  constructor() {
    super();

    this.panel = document.querySelector('.panel');
    this.panel.addEventListener('click', this.panelClick.bind(this));
  }

  panelClick = event => {
    if (event.target.classList.contains('loop')) {
      const parent = event.target.closest('.card');
      parent.classList.toggle('card--rotate');
      parent.addEventListener('mouseleave', () => parent.classList.toggle('card--rotate'), { once: true });
    } else {
      event.target
        .closest('.card')
        .querySelector('audio')
        .play();
    }
  };

  // eslint-disable-next-line class-methods-use-this
  showCards(data) {
    data.then(response => {
      document.querySelector('.panel').innerHTML = '';
      response.cards.forEach(card => createCard(card));
    });
  }
}

export default View;

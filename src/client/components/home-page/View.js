import EventEmitter from '../../tools/EventEmitter';

class View extends EventEmitter {
  constructor() {
    super();

    this.panel = document.querySelector('.panel');
    this.panel.addEventListener('click', this.panelClick.bind(this));
  }

  createCard = card => {
    const panel = document.querySelector('.panel');
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <audio src="${card.audio}"></audio>
      <div class="card__side">
        <div class="card__content">
          <div class="card__picture"></div>
          <div class="card__name word">${card.word}</div>
          <div class="card__button loop"><span class="loop icon-loop"></span></div>
        </div>
      </div>
      <div class="card__side card__side--back">
        <div class="card__content">
          <div class="card__picture"></div>
          <div class="card__name translation">${card.translation}</div>
        </div>
      </div>`;
    div.querySelector('.card__picture').style.backgroundImage = `url(${card.image})`;
    div.querySelector('.card__side--back .card__picture').style.backgroundImage = `url(${card.image})`;
    panel.append(div);
  };

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

  showCards(data) {
    data.then(response => response.cards.forEach(card => this.createCard(card)));
  }
}

export default View;

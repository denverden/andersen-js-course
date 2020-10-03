import EventEmitter from '../../tools/EventEmitter';
import { createRow, findRow, initModal, modalData, closeModal } from '../../tools/helpers';

class View extends EventEmitter {
  constructor() {
    super();

    this.panel = document.querySelector('.panel');
    this.panel.addEventListener('click', this.panelClick.bind(this));
  }

  handleAdd() {
    this.emit('add', modalData());
    closeModal();
  }

  handleEdit() {
    this.emit('edit', modalData());
    closeModal();
  }

  panelClick(event) {
    event.preventDefault();
    if (event.target.classList.contains('btn--delete')) {
      this.emit('delete', findRow(event.target.dataset.id));
    }
    if (event.target.classList.contains('btn--edit')) {
      initModal(findRow(event.target.dataset.id));
      document.querySelector('.modal__button').addEventListener('click', this.handleEdit.bind(this));
    }
    if (event.target.classList.contains('btn--add')) {
      initModal();
      document.querySelector('.modal__button').addEventListener('click', this.handleAdd.bind(this));
    }
  }

  showCards(data) {
    data.then(response => {
      document.querySelector('.table__body').innerHTML = '';
      response.cards.forEach(card => document.querySelector('.table__body').appendChild(createRow(card)));
    });
  }

  createCard(card) {
    document.querySelector('.table__body').appendChild(createRow(card));
  }

  editCard({ _id, word, translation, image, audio }) {
    const element = document.getElementById(_id);
    const [tdWord, tdTranslation, tdResources] = element.children;
    tdWord.innerText = word;
    tdTranslation.innerText = translation;
    tdResources.querySelector('img').src = image;
    tdResources.querySelector('audio').src = audio;
  }

  deleteCard(card) {
    document.getElementById(card).parentNode.removeChild(document.getElementById(card));
  }
}

export default View;

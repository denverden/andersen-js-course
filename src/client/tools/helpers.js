function createCard({ word, translation, image, audio }) {
  const panel = document.querySelector('.panel');
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <audio src="${audio}"></audio>
    <div class="card__side">
      <div class="card__content">
        <div class="card__picture"></div>
        <div class="card__name word">${word}</div>
        <div class="card__button loop"><span class="loop icon-loop"></span></div>
      </div>
    </div>
    <div class="card__side card__side--back">
      <div class="card__content">
        <div class="card__picture"></div>
        <div class="card__name translation">${translation}</div>
      </div>
    </div>`;
  div.querySelector('.card__picture').style.backgroundImage = `url(${image})`;
  div.querySelector('.card__side--back .card__picture').style.backgroundImage = `url(${image})`;
  panel.append(div);
}

function createRow({ _id, word, translation, image, audio }) {
  const rowRecord = document.createElement('tr');
  rowRecord.id = _id;
  rowRecord.innerHTML = `
    <td class="word">${word}</td>
    <td class="translation">${translation}</td>
    <td><img src="${image}" width="40%" alt="${word}"><br><audio src="${audio}" controls></audio></td>
    <td><a class="btn table__btn btn--edit" href="#" data-id="${_id}">Edit</a></td>
    <td><a class="btn table__btn btn--delete" href="#" data-id="${_id}">Delete</a></td>`;
  return rowRecord;
}

function findRow(id) {
  const row = document.getElementById(id);
  return {
    _id: id,
    word: row.querySelector('.word').textContent,
    translation: row.querySelector('.translation').textContent,
    image: row.querySelector('img').src,
    audio: row.querySelector('audio').src,
  };
}

function encodeImage() {
  const filesSelected = document.querySelector('[name="in_image"]').files;
  if (filesSelected.length > 0) {
    const fileToLoad = filesSelected[0];
    const fileReader = new FileReader();

    fileReader.onload = fileLoadedEvent => {
      const srcData = fileLoadedEvent.target.result;

      if (srcData.indexOf('data:image') >= 0) {
        document.querySelector('.modal__image').src = srcData;
      }
    };

    fileReader.readAsDataURL(fileToLoad);
  }
}

function encodeAudio() {
  const filesSelected = document.querySelector('[name="in_audio"]').files;
  if (filesSelected.length > 0) {
    const fileToLoad = filesSelected[0];
    const fileReader = new FileReader();

    fileReader.onload = fileLoadedEvent => {
      const srcData = fileLoadedEvent.target.result;

      if (srcData.indexOf('data:audio') >= 0) {
        document.querySelector('.modal__audio').src = srcData;
      }
    };

    fileReader.readAsDataURL(fileToLoad);
  }
}

function closeModal() {
  const MODAL = document.querySelector('.modal');
  MODAL.classList.remove('modal--show');
  document.querySelector('.substrate').classList.remove('substrate--show');
  MODAL.querySelector('.modal__button').outerHTML = MODAL.querySelector('.modal__button').outerHTML;
}

function initModal(card = false) {
  const MODAL = document.querySelector('.modal');
  MODAL.classList.add('modal--show');
  document.querySelector('.substrate').classList.add('substrate--show');
  document.querySelector('.substrate').addEventListener('click', closeModal);
  MODAL.querySelector('[name="in_image"]').addEventListener('change', encodeImage);
  MODAL.querySelector('[name="in_audio"]').addEventListener('change', encodeAudio);
  MODAL.querySelector('[name="id"]').value = '';
  MODAL.querySelector('[name="word"]').value = '';
  MODAL.querySelector('[name="translation"]').value = '';
  MODAL.querySelector('img').src = '';
  MODAL.querySelector('audio').src = '';
  MODAL.querySelector('[name="in_image"]').value = '';
  MODAL.querySelector('[name="in_audio"]').value = '';
  if (card) {
    MODAL.querySelector('[name="id"]').value = card._id;
    MODAL.querySelector('[name="word"]').value = card.word;
    MODAL.querySelector('[name="translation"]').value = card.translation;
    MODAL.querySelector('img').src = card.image;
    MODAL.querySelector('audio').src = card.audio;
  }
}

function modalData() {
  const MODAL = document.querySelector('.modal');
  return {
    _id: MODAL.querySelector('[name="id"]').value,
    word: MODAL.querySelector('[name="word"]').value,
    translation: MODAL.querySelector('[name="translation"]').value,
    image: MODAL.querySelector('img').src,
    audio: MODAL.querySelector('audio').src,
  };
}

export { createCard, createRow, findRow, initModal, closeModal, modalData };

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
    <tr>
      <td>${word}</td>
      <td>${translation}</td>
      <td><img src="${image}" alt="${word}"><br><audio src="${audio}" controls></audio></td>
      <td><a class="btn" href="#">Edit</a></td>
      <td><a class="btn" href="#">Delete</a></td>
    </tr>`;
  return rowRecord;
}

export { createCard, createRow };

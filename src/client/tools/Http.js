class Http {
  constructor(url) {
    this.url = url;
  }

  cardsGetAll() {
    return fetch(this.url)
      .then(response => {
        return response.json(response);
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  createCard(card) {
    return fetch(`${this.url}/${card._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(card),
    })
      .then(response =>
        response.json().then(res => {
          const newCard = Object.assign({}, card);
          newCard._id = res.createdCard._id;
          return newCard;
        })
      )
      .catch(err => console.log(`Error: ${err}`));
  }

  editCard(card) {
    return fetch(`${this.url}/${card._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(card),
    })
      .then(response => {
        console.log(response);
        return card;
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  deleteCard(card) {
    return fetch(`${this.url}/${card._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log(response);
        return card._id;
      })
      .catch(err => console.log(`Error: ${err}`));
  }
}

const http = new Http('http://localhost:3030/api/cards');
export default http;

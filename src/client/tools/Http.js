class Http {
  constructor(url) {
    this.url = url;
  }

  cardsGetAll() {
    return fetch(this.url).then(response => {
      return response.json(response);
    });
  }

  deleteCard(card) {
    return fetch(`${this.url}/${card}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log(response);
        return card;
      })
      .catch(err => console.log(`Error: ${err}`));
  }
}

const http = new Http('http://localhost:3030/api/cards');
export default http;

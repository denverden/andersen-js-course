class Http {
  constructor(url) {
    this.url = url;
  }

  cardsGetAll() {
    return fetch(this.url).then(response => {
      return response.json(response);
    });
  }
}

const http = new Http('http://localhost:3030/api/cards');
export default http;

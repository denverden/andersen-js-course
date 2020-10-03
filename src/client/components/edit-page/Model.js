import http from '../../tools/Http';

class Model {
  // eslint-disable-next-line class-methods-use-this
  async cards() {
    const data = await http.cardsGetAll();
    return data;
  }

  // eslint-disable-next-line class-methods-use-this
  async deleteCard(card) {
    const data = await http.deleteCard(card);
    return data;
  }
}

export default Model;

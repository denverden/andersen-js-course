import http from '../../tools/Http';

class Model {
  async cards() {
    const data = await http.cardsGetAll();
    return data;
  }

  async createCard(card) {
    const data = await http.createCard(card);
    return data;
  }

  async editCard(card) {
    const data = await http.editCard(card);
    return data;
  }

  async deleteCard(card) {
    const data = await http.deleteCard(card);
    return data;
  }
}

export default Model;

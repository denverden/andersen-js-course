import http from '../../tools/Http';

class Model {
  // eslint-disable-next-line class-methods-use-this
  async cards() {
    const data = await http.cardsGetAll();
    return data;
  }
}

export default Model;

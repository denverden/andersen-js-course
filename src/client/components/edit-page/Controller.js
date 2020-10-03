class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('add', this.createCard.bind(this));
    view.on('edit', this.editCard.bind(this));
    view.on('delete', this.deleteCard.bind(this));

    view.showCards(model.cards());
  }

  async createCard(card) {
    const record = await this.model.createCard(card);
    this.view.createCard(record);
  }

  async editCard(card) {
    const record = await this.model.editCard(card);
    this.view.editCard(record);
  }

  async deleteCard(card) {
    const record = await this.model.deleteCard(card);
    this.view.deleteCard(record);
  }
}

export default Controller;

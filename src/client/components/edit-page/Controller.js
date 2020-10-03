class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('delete', this.deleteCard.bind(this));

    view.showCards(model.cards());
  }

  async deleteCard(card) {
    const record = await this.model.deleteCard(card);
    this.view.deleteCard(record);
  }
}

export default Controller;

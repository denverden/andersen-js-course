class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.showCards(model.cards());
  }
}

export default Controller;

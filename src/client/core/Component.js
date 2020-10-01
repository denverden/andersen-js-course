class Component {
  constructor(data) {
    this.selector = data.selector;
    this.template = data.template;
  }

  render() {
    const SELECTOR = document.querySelector(this.selector);
    SELECTOR.innerHTML = this.template;
  }
}

export default Component;

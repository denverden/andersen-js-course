function renderComponent(component) {
  component.render();
  if (typeof component.afterInit !== 'undefined') {
    component.afterInit();
  }
}

export default renderComponent;

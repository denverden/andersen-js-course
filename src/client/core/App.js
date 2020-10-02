import Routing from './routing/Routing';
import routes from './routing/routesData';
import renderComponent from './renderComponent';

class App {
  constructor(data) {
    this.components = data.components;
    this.routes = data.routes;
  }

  start() {
    this.components.forEach(component => renderComponent(component));
    const routing = new Routing(this.routes);
    routing.initRoutes();
  }
}

const app = new App({
  components: [],
  routes,
});

export default app;

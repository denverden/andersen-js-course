import Routing from './routing/Routing';
import routes from './routing/routesData';

class App {
  constructor(data) {
    this.components = data.components;
    this.routes = data.routes;
  }

  start() {
    this.components.forEach(component => component.render());
    const routing = new Routing(this.routes);
    routing.initRoutes();
  }
}

const app = new App({
  components: [],
  routes,
});

export default app;

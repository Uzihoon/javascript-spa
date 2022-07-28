import App from './app/App';
import * as View from './app/view';

function main() {
  const app = new App();
  app.render();
}

window.addEventListener('load', main);

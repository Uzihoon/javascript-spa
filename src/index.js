import App from './app/App';
import * as View from './app/view';

function main() {
  const root = document.getElementById('app');
  const app = new App();

  View.render(app.render(), root);
}

window.addEventListener('load', main);

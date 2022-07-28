import Store from './store';
import ViewController from './controller/ViewController';
import '../styles';

export default class App {
  constructor() {
    this.store = new Store();
    this.ViewController = new ViewController(this.store);
  }

  render() {
    this.ViewController.render();
  }
}

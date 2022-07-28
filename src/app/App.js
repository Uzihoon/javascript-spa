import Store from './store';
import ViewController from './controller/ViewController';
import '../styles';

export default class App {
  constructor() {
    this.store = new Store(this.modeChange.bind(this));
    this.ViewController = new ViewController(this.store);
  }

  modeChange(state) {
    this.ViewController.modeChange(state);
  }

  render() {
    return this.ViewController.render();
  }
}

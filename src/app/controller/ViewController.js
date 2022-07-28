import EnrollmentController from './EnrollmentController';
import ExecutionController from './ExecutionController';
import Template from '../components/Template';
import * as View from '../view';

export default class ViewController {
  constructor(store) {
    this.store = store;
    this.template = null;

    this.EnrollmentController = new EnrollmentController(this.store);
    this.ExecutionController = new ExecutionController(this.store);
  }

  renderExecution() {
    return Template(...this.ExecutionController.render());
  }

  renderEnrollment() {
    return Template(this.EnrollmentController.render());
  }

  renderMode() {
    const modeList = {
      enrollment: this.renderEnrollment.bind(this),
      execution: this.renderExecution.bind(this)
    };
    return modeList[this.store.getState('mode')]();
  }

  paintElement() {
    const prev = this.template;
    this.template = this.renderMode(this.mode);
    View.reRender('#app', prev, this.template);
  }

  render() {
    this.store.subscribe('mode', this.paintElement.bind(this));
  }
}

import EnrollmentController from './EnrollmentController';
import ExecutionController from './ExecutionController';
import Template from '../components/Template';
import Header from '../components/Header';
import * as View from '../view';

export default class ViewController {
  constructor(store) {
    this.store = store;
    this.mode = this.store.getState('mode');
    this.template = null;

    this.EnrollmentController = new EnrollmentController(this.store);
    this.ExecutionController = new ExecutionController(this.store);
  }

  checkModeChange(state) {
    if (this.mode !== state.mode) {
      this.mode = state.mode;
      this.reRendering();
    }
  }

  renderExecution() {
    return Template(...this.ExecutionController.render());
  }

  renderEnrollment() {
    return Template(
      Header('Daily Study Plan'),
      this.EnrollmentController.render()
    );
  }

  renderMode(mode) {
    const modeList = {
      enrollment: this.renderEnrollment.bind(this),
      execution: this.renderExecution.bind(this)
    };

    return modeList[mode]();
  }

  reRendering() {
    const prev = this.template;
    this.tempalte = this.renderMode(this.mode);
    View.reRender('#app', prev, this.template);
  }

  render() {
    this.template = this.renderMode(this.mode);
    return this.template;
  }
}

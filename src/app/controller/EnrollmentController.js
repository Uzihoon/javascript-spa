import Plan from '../components/Plan';
import Todo from '../components/Todo';
import Enrollment from '../components/Enrollment';
import { getUniqueId } from '../utils';
import * as View from '../view';

export default class EnrollmentController {
  constructor(store) {
    this.store = store;
    this.targetPlan = null;
    this.targetTodo = null;
    this.deleteTodo = [];
    this.planId = 'planList';
    this.inputValue = '';

    this.rule = {
      title: { pattern: /\S/ },
      hour: { pattern: /^\d+$/, default: 1, min: 0, max: 10 },
      min: { pattern: /^\d+$/, default: 30, min: 0, max: 59 }
    };

    this.store.subscribe(this.planId, this.renderPlan.bind(this));
    this.planList = this.getPlanList();
    this.todoList = Todo(
      this.onCreateTodo.bind(this),
      this.onCheckTodo.bind(this),
      this.onDeleteTodo.bind(this)
    );
  }
  render() {}

  onClickPlan(event, id) {
    event.preventDefault();
    console.log('?');
  }

  onCreatePlan() {
    if (!this.inputValue) return;
    const id = getUniqueId();
    this.store.setState(
      this.planId,
      this.store.getState(this.planId).concat({ title: this.inputValue, id })
    );
    this.inputValue = '';
  }

  onEditPlan() {}

  onDeletePlan(event, id) {
    event.preventDefault();
    event.stopPropagation();
    console.log(id);
  }

  onCreateTodo() {}
  onCheckTodo() {}
  onDeleteTodo() {}

  getPlanList() {
    return Plan({
      onClick: this.onClickPlan.bind(this),
      onCreate: this.onCreatePlan.bind(this),
      onEdit: this.onEditPlan.bind(this),
      onDelete: this.onDeletePlan.bind(this),
      onChange: this.onChangePlan.bind(this),
      planList: this.store.getState('planList', []),
      id: this.planId
    });
  }

  onChangePlan(e) {
    this.inputValue = e.target.value;
  }

  renderPlan() {
    const prev = this.planList;
    this.planList = this.getPlanList();
    View.reRender('.plan-enrollment', prev, this.planList, this.planId);
  }

  planRender() {
    return this.planList;
  }

  todoRender() {
    const id = this.store.getState('activeId');
    return this.todoList.render(this.store.getTodoList(id));
  }

  render() {
    return Enrollment(this.planRender(), this.todoRender());
  }
}

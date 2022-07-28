import Plan from '../components/Plan';
import Todo from '../components/Todo';
import Enrollment from '../components/Enrollment';

export default class EnrollmentController {
  constructor(store) {
    this.store = store;
    this.targetPlan = null;
    this.targetTodo = null;
    this.deleteTodo = [];

    this.rule = {
      title: { pattern: /\S/ },
      hour: { pattern: /^\d+$/, default: 1, min: 0, max: 10 },
      min: { pattern: /^\d+$/, default: 30, min: 0, max: 59 }
    };

    this.planList = Plan(
      this.onClickPlan.bind(this),
      this.onCreatePlan.bind(this),
      this.onEditPlan.bind(this),
      this.onDeletePlan.bind(this)
    );

    this.todoList = Todo(
      this.onCreateTodo.bind(this),
      this.onCheckTodo.bind(this),
      this.onDeleteTodo.bind(this)
    );
  }
  render() {}

  onClickPlan() {}

  onCreatePlan() {}

  onEditPlan() {}

  onDeletePlan() {}

  onCreateTodo() {}
  onCheckTodo() {}
  onDeleteTodo() {}

  planRender() {
    return this.planList.render(this.store.getState('planList'));
  }

  todoRender() {
    const id = this.store.getState('activeId');
    return this.todoList.render(this.store.getTodoList(id));
  }

  render() {
    return Enrollment(this.planRender(), this.todoRender());
  }
}

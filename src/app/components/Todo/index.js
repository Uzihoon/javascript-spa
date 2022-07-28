import * as View from '../../view';

export default function Todo(onCreate, onCheck, onStart) {
  return {
    todoListElement: null,
    startBtnElement: null,
    addButton(activePlan, checkList) {
      return View.createView(
        'div',
        { class: 'btn-box' },
        this.addCreateButton(activePlan)
      );
    },
    addCreateButton(activePlan) {
      return View.createView('div', {
        class: `btn add-plan-btn ${!activePlan && 'disabled'}`,
        click: onCreate
      });
    },
    addTodoListBox(todoList, checkList) {
      const todos = todoList.map(todo => this.addTodoItem(todo, checkList));
      this.todoListElement = View.createView(
        'div',
        { class: 'todo-list' },
        ...todos
      );

      return this.todoListElement;
    },

    addTodoItem(todo, checkList) {
      return View.createView(
        'div',
        { class: 'todo-item', 'data-id': todo.id },
        this.addCheckBox(todo.id, checkList),
        View.createView(
          'div',
          {
            class: 'todo-title'
          },
          `${todo.title}`
        )
      );
    },
    addCheckBox(id, checkList) {
      const inputProps = {
        type: 'checkbox',
        click: onCheck,
        id,
        name,
        class: 'plan-check',
        checked: checkList && checkList.includes(id)
      };

      return View.createView(
        'div',
        { class: 'check-wrapper' },
        View.createView('input', inputProps)
      );
    },
    addStartButton(id) {
      this.startBtnElement = View.createView(
        'div',
        { class: `btn start-btn ${!id && 'disabled'}`, click: onStart },
        'Start study plan'
      );
    },
    render(todoList, activeId) {
      return View.createView(
        'div',
        { class: 'todo-container' },
        this.addButton(activeId, []),
        this.addTodoListBox(todoList),
        this.addStartButton(activeId)
      );
    }
  };
}

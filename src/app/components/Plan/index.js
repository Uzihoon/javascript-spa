import * as View from '../../view';

export default function Plan(onFocus, onCreate, onEdit, onDelete) {
  return {
    buttonElement: null,
    inputElement: null,
    planListElement: null,
    wrapperElement: null,
    addButton() {
      this.buttonElement = View.createView(
        'div',
        { class: 'btn add-plan', click: onCreate },
        'Add new plan'
      );

      return this.buttonElement;
    },
    addInput(value) {
      this.inputElement = View.createView('input', {
        class: 'input-plan',
        placeholder: 'Please input plan',
        value
      });
      return this.inputElement;
    },
    addInputWrapper() {
      return View.createView('div', { class: 'input-plan-box' });
    },
    addPlan(p, id) {
      return View.createView(
        'div',
        {
          class: `plan-item ${p.id === id && 'active-plan'}`,
          'data-id': p.id,
          click: onFocus
        },
        View.createView('div', { class: 'plan-title' }, p.title),
        View.createView('div', {
          class: 'icon edit-plan-icon',
          click: onEdit
        }),
        View.createView('div', {
          class: 'icon delete-plan-icon',
          click: onDelete
        })
      );
    },
    addPlanList(list, id) {
      const plans = list.map(p => this.addPlan(p, id));
      plans.unshift(this.addInput());
      this.planListElement = View.createView(
        'div',
        { class: 'plan-list' },
        ...plans
      );

      return this.planListElement;
    },

    render(list, id) {
      this.wrapperElement = View.createView(
        'div',
        { class: 'plan-container' },
        this.addButton(),
        this.addPlanList(list, id)
      );

      return this.wrapperElement;
    }
  };
}

import HighOrderComponent from '../HighOrderComponent';
import * as View from '../../view';
import './style';

function Plan(props) {
  const {
    onChange,
    onClick,
    onCreate,
    onEdit,
    onDelete,
    planList,
    activeId,
    id
  } = props;
  const Header = () => {
    return View.createView('h3', { class: 'plan-header' }, 'Daily Study Plan');
  };

  const Button = () => {
    return View.createView(
      'div',
      { class: 'add-plan', click: onCreate },
      'ADD'
    );
  };

  const Input = () => {
    return View.createView('input', {
      class: 'input-plan',
      placeholder: 'Please input plan',
      input: onChange
    });
  };

  const InputBox = () => {
    return View.createView(
      'div',
      {
        class: 'input-box'
      },
      Input(),
      Button()
    );
  };

  const PlanList = () => {
    const plans = planList.map(item => PlanItem(item));
    return View.createView('div', { class: 'plan-list' }, ...plans);
  };

  const PlanItem = ({ id, title }) => {
    return View.createView(
      'div',
      {
        class: `plan-item ${id === activeId && 'active-plan'}`,
        'data-id': id,
        click: e => onClick(e, id)
      },
      View.createView('div', { class: 'plan-title' }, title),
      View.createView('i', {
        class: 'icon-minus',
        click: e => onDelete(e, id)
      })
    );
  };

  return {
    render() {
      return View.createView(
        'div',
        { class: 'plan-container', id },
        Header(),
        InputBox(),
        PlanList()
      );
    }
  };
}

export default HighOrderComponent(Plan);

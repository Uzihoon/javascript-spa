import * as View from '../../view';

export default function Header(title) {
  return View.createView(
    'div',
    { class: 'plan-header' },
    View.createView('div', { class: 'header-title' }, title)
  );
}

import * as View from '../../view';

export default function Template(header, ...children) {
  return View.createView(
    'div',
    { class: 'wrapper center' },
    View.createView(
      'div',
      { class: 'plan-template' },
      header,
      View.createView('div', { class: 'plan-content-wrapper' }, ...children)
    )
  );
}

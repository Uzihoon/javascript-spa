import * as View from '../../view';

export default function Enrollment(...children) {
  return View.createView('div', { class: 'plan-enrollment' }, ...children);
}

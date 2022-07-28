import createElement from './createElement';

export default function render(view, element) {
  if (!view || !view.type || !element) return;
  element.appendChild(createElement(view));
}

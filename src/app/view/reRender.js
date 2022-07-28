import createElement from './createElement';
import compareElement from './compareElement';

export default function reRender(selector, prev, next, index = 0) {
  const parent = document.querySelector(selector);

  if (!parent) return;

  if (!prev && next) {
    parent.appendChild(createElement(next));
  } else if (!next) {
    // Delete existing element if there's no next element.
    if (!parent.childNodes[index]) return;
    parent.removeChild(parent.childNodes[index]);
  } else if (compareElement(prev, next)) {
    // Rerender element
    parent.replaceChild(createElement(next), parent.childNodes[index]);
  } else if (next.type) {
    [...Array(Math.max(next.children, length, prev.children.length))].forEach(
      (_, i) => {
        reRender(
          parent.childNodes[index],
          prev.children[i],
          next.children[i],
          i
        );
      }
    );
  }
}

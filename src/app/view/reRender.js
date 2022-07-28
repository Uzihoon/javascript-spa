import createElement from './createElement';
import compareElement from './compareElement';

export default function reRender(selector, prev, next, targetId) {
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
    const prevElement = [...parent.childNodes].find(
      node => node.getAttribute('id') === targetId
    );
    if (!prevElement) return;
    parent.replaceChild(createElement(next), prevElement);
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

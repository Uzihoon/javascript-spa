import appendProps from './appendProps';

export default function createElement(view) {
  if (!view) return document.createTextNode('');

  let virtualElement;

  if (typeof view === 'string') {
    virtualElement = document.createTextNode(view);
  } else {
    virtualElement = appendProps(
      document.createElement(view.type || 'div'),
      view.props
    );

    view.children
      .map(createElement)
      .forEach(virtualElement.appendChild.bind(virtualElement));
  }

  return virtualElement;
}

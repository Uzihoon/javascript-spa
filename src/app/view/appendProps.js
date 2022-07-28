import { isObject, isFunction } from '../utils/isType';
import eventList from '../const/event';

export default function appendProps(element, props) {
  if (!props || !element || !isObject(props)) return element;

  const propsList = Object.entries(props);

  for (const [key, value] of propsList) {
    const isEvent = eventList.includes(key);

    if (isEvent && isFunction(value)) {
      element.addEventListener(key, value);
    } else {
      element.setAttribute(key, value);
    }
  }

  return element;
}

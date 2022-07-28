import { isObject } from '../utils/isType';

export default class Store {
  constructor() {
    this.initial = {
      mode: 'enrollment',
      planList: [{ title: 'Basic daily plan', id: 'basic' }],
      todoList: { basic: [{ hour: 1, min: 30, title: 'English', id: 'eng' }] },
      activeId: 'basic'
    };

    this.state = {};
  }

  setState(key, value) {
    this.state[key].value = value;
  }

  getState(key, defaultValue) {
    return Object.assign({}, this.state[key]).value || defaultValue;
  }

  getTodoList(id) {
    return Object.freeze(this.getState('todoList', {})[id]) || [];
  }

  setProxy() {
    return function proxy(state, hook) {
      return new Proxy(state, {
        get(target, property) {
          const value = target[property];
          return value;
        },
        set(target, property, value) {
          target[property] = value;
          hook(this.state);
          return true;
        }
      });
    };
  }

  subscribe(key, hook) {
    const existValue = this.getState(key) || this.initial[key];
    this.state = {
      ...this.state,
      [key]: this.setProxy()({ value: existValue }, hook)
    };
    hook(existValue);
  }
}

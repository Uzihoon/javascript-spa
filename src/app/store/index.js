export default class Store {
  constructor(callback) {
    this.callback = callback || function() {};
    this.state = {
      mode: 'enrollment',
      planList: [{ title: 'Basic daily plan', id: 'basic' }],
      todoList: { basic: [{ hour: 1, min: 30, title: 'English', id: 'eng' }] },
      activePlan: null
    };
  }

  setState(key, value) {
    this.state = { ...this.state, [key]: value };
    this.callback(this.state);
  }

  getState(key) {
    return Object.freeze(this.state[key]);
  }
}

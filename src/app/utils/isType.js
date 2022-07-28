export function isFunction(func) {
  return !!func && typeof func === 'function';
}

export function isObject(obj) {
  return !!obj && Object.prototype.toString.call(obj) === '[object Object]';
}

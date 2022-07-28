export default function createView(type = 'div', props, ...children) {
  return { type, props, children };
}

export default function HighOrderComponent(Component) {
  return props => Component(props).render();
}

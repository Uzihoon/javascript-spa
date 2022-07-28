export default function getUniqueId() {
  const randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  return `${Date.now()}-${randomNum}`;
}

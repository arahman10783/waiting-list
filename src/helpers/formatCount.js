export default function formatCount(count) {
  return count <= 9 ? `00${count}` : count <= 99 ? `0${count}` : count
}
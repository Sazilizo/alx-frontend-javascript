export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw TypeError('Cannot process');
  }
  for (const key of map.keys()) {
    if (map.get(key) === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
